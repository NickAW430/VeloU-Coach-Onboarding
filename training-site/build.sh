#!/bin/sh
# Builds velou.training (Cloudflare Pages: build command `sh training-site/build.sh`, output directory `dist`).
# Only the web app and what it needs are published. The rest of this repo (coach onboarding, player report, tools) is not.
set -e
cd "$(dirname "$0")/.."
rm -rf dist
mkdir -p dist/player-report
cp -R athlete-management dist/athlete-management   # /athlete-management/ = coach dashboard, /athlete-management/athlete/ = the app
cp -R assets dist/assets                           # shared styles and logos
cp -R body-comp dist/body-comp                     # the Nutrition screen opens this
cp player-report/support.js dist/player-report/support.js   # the page runtime the app is built on
cp training-site/index.html training-site/_headers training-site/robots.txt dist/
python3 training-site/for-training.py dist     # what differs from the coaches' copy of the app: see that file
echo "dist ready: $(find dist -type f | wc -l | tr -d ' ') files, $(du -sk dist | cut -f1) KB"
