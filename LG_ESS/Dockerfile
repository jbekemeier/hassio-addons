FROM ubuntu:latest

USER root

# Install dependencies required to git clone.
RUN apt-get update
RUN apt-get install git -y
RUN git clone git@https://github.com/gluap/pyess.git

RUN npm i
