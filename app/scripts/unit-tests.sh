#!/bin/bash

BASEDIR=$(dirname "$0")
$BASEDIR/../node_modules/nodeunit/bin/nodeunit $BASEDIR/../tests/unit/*.js
