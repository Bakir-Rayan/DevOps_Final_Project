FROM ubuntu:latest

RUN apt-get -y update

RUN apt-get -y upgrade

RUN apt-get install -y sqlite3 libsqlite3-dev

RUN mkdir /db

WORKDIR /db

COPY database.db .

ENTRYPOINT [ "sqlite3" ]

CMD [ "database.db" ]