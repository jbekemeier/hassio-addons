# Pull base image
FROM FROM balenalib/aarch64-ubuntu-node:14-bionic
RUN apt update
RUN apt install -y git
RUN git clone https://github.com/gluap/pyess.git
# Define default command
CMD ["/bin/sh"]
