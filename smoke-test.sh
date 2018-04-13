#!/bin/bash

# A simple HTTP request to the HTTP port 80 will determine, if the application is
# running properly
curl -sSf $1 >> /dev/null
