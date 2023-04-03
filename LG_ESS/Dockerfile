# Pull base image
FROM balenalib/aarch64-ubuntu-node:14-bionic
RUN apt-get update
RUN apt-get install -y git
RUN git clone https://github.com/gluap/pyess.git
# Define default command
CMD ["/bin/sh"]
