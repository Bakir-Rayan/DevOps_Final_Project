FROM mysql:latest

ENV MYSQL_DATABASE root

ENV MYSQL_ROOT_PASSWORD password
ADD test_data.sql /docker-entrypoint-initdb.d

EXPOSE 3306
