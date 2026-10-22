// Structural similarity (SSIM, grayscale, 8x8 windows) between two PNGs at the same width.
// Both images are downscaled by --scale (default 4) and compared over their overlapping height,
// plus a height-normalized variant (b resampled to a's height) that tolerates vertical reflow.
// Usage: node ssim.mjs <a.png> <b.png> [--scale 4] [--json]
import { readFileSync } from 'node:fs';
import { PNG } from 'pngjs';

const args = process.argv.slice(2);
const [aPath, bPath] = args.filter((x) => !x.startsWith('--') && !/^\d+$/.test(x));
const scale = Number(args[args.indexOf('--scale') + 1]) || 4;
const load = (p) => PNG.sync.read(readFileSync(p));
const gray = (png, w, h) => {
  const out = new Float64Array(w * h);
  const sx = png.width / w; const sy = png.height / h;
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      let s = 0; let n = 0;
      for (let yy = Math.floor(y * sy); yy < Math.floor((y + 1) * sy); yy += 1) {
        for (let xx = Math.floor(x * sx); xx < Math.floor((x + 1) * sx); xx += 1) {
          const i = (yy * png.width + xx) * 4;
          s += 0.299 * png.data[i] + 0.587 * png.data[i + 1] + 0.114 * png.data[i + 2]; n += 1;
        }
      }
      out[y * w + x] = n ? s / n : 255;
    }
  }
  return out;
};
const ssim = (A, B, w, h) => {
  const C1 = (0.01 * 255) ** 2; const C2 = (0.03 * 255) ** 2; const win = 8;
  let total = 0; let count = 0;
  for (let y = 0; y + win <= h; y += win) {
    for (let x = 0; x + win <= w; x += win) {
      let ma = 0; let mb = 0;
      for (let j = 0; j < win; j += 1) for (let i = 0; i < win; i += 1) { const k = (y + j) * w + x + i; ma += A[k]; mb += B[k]; }
      ma /= win * win; mb /= win * win;
      let va = 0; let vb = 0; let cov = 0;
      for (let j = 0; j < win; j += 1) {
        for (let i = 0; i < win; i += 1) {
          const k = (y + j) * w + x + i; const da = A[k] - ma; const db = B[k] - mb;
          va += da * da; vb += db * db; cov += da * db;
        }
      }
      const n = win * win - 1; va /= n; vb /= n; cov /= n;
      total += ((2 * ma * mb + C1) * (2 * cov + C2)) / ((ma * ma + mb * mb + C1) * (va + vb + C2)); count += 1;
    }
  }
  return count ? total / count : 0;
};
const a = load(aPath); const b = load(bPath);
const w = Math.floor(Math.min(a.width, b.width) / scale);
const hOverlap = Math.floor(Math.min(a.height, b.height) / scale);
const crop = (png, hPx) => ({ width: png.width, height: hPx, data: png.data.subarray(0, png.width * hPx * 4) });
const overlap = ssim(gray(crop(a, hOverlap * scale), w, hOverlap), gray(crop(b, hOverlap * scale), w, hOverlap), w, hOverlap);
const hA = Math.floor(a.height / scale);
const normalized = ssim(gray(a, w, hA), gray(b, w, hA), w, hA);
const fold = Math.floor(900 / scale);
const aboveFold = ssim(gray(crop(a, fold * scale), w, fold), gray(crop(b, fold * scale), w, fold), w, fold);
const res = { a: aPath, b: bPath, scale, ssimOverlap: +(overlap * 100).toFixed(2), ssimHeightNormalized: +(normalized * 100).toFixed(2), ssimAboveFold: +(aboveFold * 100).toFixed(2), heights: [a.height, b.height] };
console.log(args.includes('--json') ? JSON.stringify(res) : res);
