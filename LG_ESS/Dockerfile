FROM ubuntu:latest

USER root

# Take an SSH key as a build argument.
ARG SSH_KEY

# Install dependencies required to git clone.
RUN apt-get update
    
# 1. Create the SSH directory.

RUN mkdir -p /root/.ssh/ && \
    echo "$SSH_KEY" > /root/.ssh/id_rsa && \
    chmod -R 600 /root/.ssh/ && \
    ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
 
RUN git clone git@https://github.com/gluap/pyess.git

RUN npm i
