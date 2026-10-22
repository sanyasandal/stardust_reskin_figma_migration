#!/bin/bash
# push using the sanyasandal keyring credential (GH_TOKEN env points at another account)
H='!f(){ echo username=sanyasandal; echo "password=$(env -u GH_TOKEN gh auth token --user sanyasandal)"; }; f'
/usr/bin/git -c credential.helper= -c "credential.helper=$H" push "$@"
