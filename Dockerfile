# Etapa de construcción
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/package*.json ./
RUN npm ci --only=production
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/static ./static
ENV NODE_ENV=production
ENV MNEXTAUTH_URL=http://localhost:3000
ENV NEXTAUTH_SECRET=seocranet
EXPOSE 3000
CMD ["npm", "start"]


