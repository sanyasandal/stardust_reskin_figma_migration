#!/bin/bash
# usage: sync.sh <webpath> <marker>  — push HEAD:fortstreet, force code sync, poll until marker served
cd "$(dirname "$0")/../../.." || exit 1
stardust/.work/deploy/push.sh -f origin HEAD:fortstreet >/dev/null 2>&1 || { echo push failed; exit 1; }
DA_TOKEN=$(/usr/local/bin/node -e "process.stdout.write(require(process.env.HOME+'/.aem/da-token.json').access_token)" 2>/dev/null || node -e "process.stdout.write(require(process.env.HOME+'/.aem/da-token.json').access_token)")
/usr/bin/curl -s -o /dev/null -w "sync %{http_code}\n" -X POST -H @<(printf 'Authorization: token %s\n' "$DA_TOKEN") "https://admin.hlx.page/code/sanyasandal/stardust-reskin-figma-migration/fortstreet/*"
for i in $(seq 1 30); do
  if /usr/bin/curl -s --compressed "https://fortstreet--stardust-reskin-figma-migration--sanyasandal.aem.page$1?cb=$RANDOM$i" | /usr/bin/grep -q -- "$2"; then echo "served after $i"; exit 0; fi
  sleep 5
done
echo "not served"; exit 1
