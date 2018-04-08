#!/bin/bash

BASEDIR=$(dirname "$0")
$BASEDIR/app/node_modules/mocha/bin/mocha $BASEDIR/app/tests/acceptance/*.js
