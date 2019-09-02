  {
  "name": "pdftohtml",
  "version": "0.1",
  "slug": "pdftohtml",
  "description": "PDF to HTML converter for Homeassitant",
  "url": "https://github.com/buktahula/hassio-addons/pdftohtml",
  "webui": "http://[HOST]:[PORT:80]",
  "startup": "services",
  "ingress": true,
  "ingress_port": 80,
  "panel_icon": "mdi:console",
  "panel_title": "Web",
  "boot": "auto",
  "options": {},
  "schema": {},
  "arch": [
    "aarch64",
    "amd64",
    "armhf",
    "armv7",
    "i386"
  ],
    "map": [
    "config:rw",
    "ssl:rw",
    "addons:rw",
    "share:rw",
    "backup:rw"
  ]
  }
