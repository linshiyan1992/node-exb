FROM alpine:3.15

RUN apk add --update ca-certificates

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tencent.com/g' /etc/apk/repositories \
  && apk add --update --no-cache nodejs npm

WORKDIR /app

COPY package*.json /app/

RUN npm config set registry https://mirrors.cloud.tencent.com/npm

RUN npm install

COPY . /app

CMD [ "npm", "start" ]
