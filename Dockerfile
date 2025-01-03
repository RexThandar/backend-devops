# Primera etapa de construccion
FROM node:22 AS build

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Segunda etapa de creacion de imagen final y liviana
FROM node:22-alpine

WORKDIR /usr/app

COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/dist ./dist
COPY --from=build /usr/app/package*.json ./

EXPOSE 3000
CMD ["node", "dist/index.js"]
