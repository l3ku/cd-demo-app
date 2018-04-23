#!/bin/bash

# A simple HTTP request to the HTTP port 80 will determine whether the application
# is running at all in the desired IP
curl -sSf $1:80 >> /dev/null
