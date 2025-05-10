FROM node

WORKDIR /src/usr/

COPY . .

EXPOSE 3001

RUN npm i
RUN npm run build

CMD ["npm", "start"]