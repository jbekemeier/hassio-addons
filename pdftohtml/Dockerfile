ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8

# update debian source list
RUN apt-get -qqy update && \
    apt-get -qqy install pdf2htmlex && \
    rm -rf /var/lib/apt/lists/*

# Copy data for add-on
COPY run.sh /
RUN  chmod +x /run.sh  
CMD ["/run.sh"]
