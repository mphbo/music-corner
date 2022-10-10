FROM node:14-alpine
WORKDIR '/app,'
COPY ./package.json ./
RUN npm install
RUN npm run build

# Copy tsc build into /app of final image, as well as modules and package lock
COPY ./node_modules .
COPY ./package-lock.json .
COPY ./dist .
CMD ["npm", "run", "start"]