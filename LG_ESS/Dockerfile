FROM python:alpine3.17

# Install dependencies required to git clone.
RUN apk update && apk upgrade && \
git clone https://github.com/gluap/pyess.git

# Define default command.
RUN /bin/sh 
