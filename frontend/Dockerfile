FROM node:18.17-slim

RUN npm -g install pnpm  serve
WORKDIR /app
COPY . .

RUN chmod +x ./devtools/rundevserver.sh

RUN pnpm install && pnpm build

RUN ls -al 

RUN rm -rf node_modules ~/.cache/pnpm ~/.npm ~/.local/share/pnpm

RUN ls -al

#RUN pnpm install -D

#RUN npm uninstall -g pnpm

ENTRYPOINT [ "serve", "-s", "/app/build/static" ]
