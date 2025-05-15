FROM registry.gviet.vn:5000/library/node:18-alpine as builder

env PUPPETEER_SKIP_DOWNLOAD=true

RUN apk add --no-cache git
RUN npm install -g pnpm@8.15.4

WORKDIR /src

COPY .npmrc pnpm-lock.yaml ./
COPY patches ./patches

ADD . ./

RUN pnpm install --ignore-scripts

RUN pnpm run build

########### RUN ##########

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
# copy folder dist build to nginx folder static
COPY --from=builder /src/docs/.vitepress/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
