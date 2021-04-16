FROM alpine:latest

WORKDIR /usr/app
RUN apk add --no-cache nodejs yarn make git
EXPOSE 3000
COPY package*.json ./
RUN yarn install
COPY svelte.config.cjs .
COPY ./static ./static
COPY ./src ./src
RUN yarn build
ENTRYPOINT ["yarn", "start", "--host"]
