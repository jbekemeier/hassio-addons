ARG BUILD_FROM
FROM $BUILD_FROM

# Build PYESS 
ARG PYESS_VERSION
WORKDIR /usr/src
RUN \
    apk add --no-cache --virtual .build-dependencies \
        git \
        build-base \
        py3-pip \
        python3=~3.9 \

WORKDIR /
