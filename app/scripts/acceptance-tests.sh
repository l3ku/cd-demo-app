#!/bin/bash

BASEDIR=$(dirname "$0")
$BASEDIR/../node_modules/mocha/bin/mocha $BASEDIR/../tests/acceptance/*.js
