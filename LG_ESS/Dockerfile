FROM ubuntu:latest

WORKDIR /data

RUN apt-get update \
 && apt-get install
 
RUN git clone git@https://github.com/gluap/pyess.git

WORKDIR /data/lgess

RUN npm i
