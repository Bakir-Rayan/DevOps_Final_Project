FROM node:16.15.0-bullseye

WORKDIR /usr/src/app 

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install -g npm@8.9.0

RUN npm install 

COPY . .

EXPOSE 2000

ENTRYPOINT [ "npm" ]

CMD ["start"]