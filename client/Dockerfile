FROM node:14.15-alpine as base
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./

FROM base as pre-prod
COPY . .
RUN npm install --frozen-lockfile
RUN npm run build

FROM node:14.15-alpine as prod
RUN mkdir /app
WORKDIR /app
COPY --from=pre-prod /app/public ./public
COPY --from=pre-prod /app/.next ./.next
COPY --from=pre-prod /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]