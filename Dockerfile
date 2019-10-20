FROM node:12.12

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json yarn.lock /opt/app/

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 8080

ENTRYPOINT [ "yarn", "start" ]