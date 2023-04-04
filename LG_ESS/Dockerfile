ARG BUILD_FROM
FROM $BUILD_FROM

# Build PYESS 
ARG PYESS_VERSION
WORKDIR /usr/src
RUN \
    apk add --no-cache --virtual .build-dependencies \
        gcc \
        py3-pip \
        python3 \
        
WORKDIR /
