#!/bin/sh
echo "starting proxy"
node "/app/devtools/proxyserver.js" &
serve -s "/app/build" -p 3030