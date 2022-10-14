# stage1 as builder
FROM node:14-alpine as builder
WORKDIR /app

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install


COPY . .

# Build the project and copy the files
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build


FROM nginx:alpine

ENV NODE_ENV=production

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]