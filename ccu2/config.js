    
  {
  "name": "CCU2",
  "version": "0.1",
  "slug": "ccu2",
  "description": "Homematic CCU2 for Homeassistant",
  "url": "https://github.com/buktahula/hassio-addons/ccu2",
  "webui": "http://[HOST]:[PORT:8080]",
  "startup": "services",
  "ingress": true,
  "ingress_port": 8080,
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
