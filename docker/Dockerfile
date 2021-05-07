FROM alpine:latest as build-image

WORKDIR /usr/app
RUN apk add --no-cache nodejs yarn
EXPOSE 3000

COPY package*.json ./
RUN yarn install
COPY svelte.config.cjs .
COPY ./static ./static
COPY ./src ./src
RUN yarn build
ENTRYPOINT ["yarn", "run", "dev", "--", "--open", "--host"]
