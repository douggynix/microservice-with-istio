#!/bin/sh
npm install -g pnpm
echo "Install Dev dependencies"
pnpm install
echo "Starting server for frontend in dev mode"
pnpm start