FROM python:alpine3.17

WORKDIR /app

RUN apt-get update && \
    apt-get install -y git

RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh && \
    ssh-keyscan gitlab.com > /root/.ssh/known_hosts
    
COPY ./ssh/id_rsa /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa

RUN git clone git@https://github.com/gluap/pyess.git

WORKDIR /app/lgess

RUN npm i
