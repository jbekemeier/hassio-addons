ARG BUILD_FROM
FROM $BUILD_FROM

# Build PYESS 
ARG PYESS_VERSION
WORKDIR /usr/src
RUN \
    apk add --no-cache --virtual .build-dependencies \
        git \
    && git clone --depth 1 -b ${PYESS_VERSION} \
        "https://github.com/gluap/pyess" \
    && mkdir -p pyess/build \
    && cd pyess/build \
    
WORKDIR /
