FROM python:3.10.4-bullseye

WORKDIR /app

ENV FLASK_APP=api

COPY ./api/requirements.txt ./api/

RUN pip install -r ./api/requirements.txt

COPY ./api/ ./api/

CMD [ "flask", "run", "--host=0.0.0.0", "--port=5000" ]