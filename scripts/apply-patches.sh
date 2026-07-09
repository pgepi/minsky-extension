#!/bin/sh
# Reapplies patches/*.patch to the working tree. Runs on every `yarn install`
# (via postinstall) so local customizations survive an upstream sync/rebuild.
# Uses `git apply` (not plain `patch`) because some patches touch binary
# assets (icons/logos), which only git's diff format can represent.
# Idempotent: skips a patch that's already applied instead of erroring.
#
# This script and the postinstall hook that calls it are themselves NOT
# patch-gated (unlike everything else this fork changes) - they're the
# bootstrap mechanism, so they have to already exist and run on a pristine
# checkout, before any patch has been applied.
set -e

cd "$(dirname "$0")/.."

for p in patches/*.patch; do
  [ -f "$p" ] || continue
  if git apply --check "$p" > /dev/null 2>&1; then
    echo "Applying $p"
    git apply "$p"
  else
    echo "Skipping $p (already applied or conflicts)"
  fi
done
