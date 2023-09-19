FROM node:18.17-slim

WORKDIR /backend
COPY . .

RUN npm install --production

RUN ls -al 

#RUN rm -rf node_modules~/.cache/pnpm ~/.npm ~/.local/share/pnpm
#RUN rm -rf node_modules

ENTRYPOINT [ "npm", "start" ]
