#!/bin/bash
# Load config
quelle=$(bashio::config 'quelle')
ziel=$(bashio::config 'ziel')
# Converting
pdf2htmlEX "{$quelle}" "{$ziel}"
