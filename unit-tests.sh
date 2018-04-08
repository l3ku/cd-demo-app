#!/bin/bash

BASEDIR=$(dirname "$0")
$BASEDIR/app/node_modules/nodeunit/bin/nodeunit $BASEDIR/app/tests/unit/*.js
