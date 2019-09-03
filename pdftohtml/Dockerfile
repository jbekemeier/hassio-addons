#Dockerfile to build a pdf2htmlEx image
FROM debian:stretch

ENV REFRESHED_AT 20151007

# update debian source list
RUN apt-get -qqy update && \
    apt-get -qqy install pdf2htmlex && \
    rm -rf /var/lib/apt/lists/*

# Copy data for add-on
#COPY run.sh /
#RUN  chmod +x run.sh  
#CMD [ "/run.sh" ]
CMD [ "pdf2htmlEX /config/pdftohtml/vertretungsplan.pdf" ]
