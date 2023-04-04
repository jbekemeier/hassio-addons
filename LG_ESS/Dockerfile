ARG BUILD_FROM
FROM ${BUILD_FROM}

# Install LG ESS
WORKDIR /usr/src

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        python3 \
        git \
    \
    && git clone --depth 1 \
        "https://github.com/gluap/pyess" \
    \
    && apt-get purge -y --auto-remove \
        git \
        
WORKDIR /
COPY rootfs /
