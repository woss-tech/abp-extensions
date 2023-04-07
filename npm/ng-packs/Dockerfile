FROM loposan-docker.pkg.coding.net/registry/docker/node:latest as build-stage
WORKDIR /app
COPY npm/ng-packs/ .
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn
RUN yarn build

# production stage
FROM loposan-docker.pkg.coding.net/registry/docker/nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/apps/dev-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
