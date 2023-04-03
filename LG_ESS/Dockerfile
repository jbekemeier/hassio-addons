FROM ubuntu:latest

USER root

# Install dependencies required to git clone.
RUN 
apt-get update && \
apt-get -y upgrade && \
apt-get install git -y && \
git clone https://github.com/gluap/pyess.git

# Set environment variables.
ENV HOME /root

# Define working directory.
WORKDIR /root

# Define default command.
CMD ["bash"]
