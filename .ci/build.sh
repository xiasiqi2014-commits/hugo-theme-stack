#!/usr/bin/env bash
set -euo pipefail

NODE_MAJOR=$(node -v 2>/dev/null | sed 's/v\([0-9]*\).*/\1/' || echo "0")
if [ "${NODE_MAJOR}" -lt 22 ] && [ "$(uname -s)" = "Linux" ]; then
  NODE_VERSION=24.12.0
  echo "Installing Node.js ${NODE_VERSION}..."
  mkdir -p "${HOME}/.local"
  curl -sLJO "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz"
  tar -C "${HOME}/.local" -xf "node-v${NODE_VERSION}-linux-x64.tar.xz"
  rm "node-v${NODE_VERSION}-linux-x64.tar.xz"
  export PATH="${HOME}/.local/node-v${NODE_VERSION}-linux-x64/bin:${PATH}"
  npm install
fi

if [ ! -d "node_modules" ]; then
  npm install
fi

echo "Building the Astro site..."
npm run build

# Ensure compatibility if Cloudflare dashboard points to site/public
mkdir -p site
rm -rf site/public
cp -r dist site/public
