ARG BUILD_FROM=ghcr.io/hassio-addons/debian-base/amd64:6.2.5
FROM $BUILD_FROM

# Install requirements for add-on
RUN \
  apk add --no-cache \
    python3
WORKDIR /data

# Copy data for add-on
COPY run.sh /
RUN chmod a+x /run.sh

CMD ["/bin/sh"]
