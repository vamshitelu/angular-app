# stage 1
FROM node:16.17.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/my-app /usr/share/nginx/html
