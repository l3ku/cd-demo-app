#!/bin/bash

BASEDIR=$(dirname "$0")
$BASEDIR/app/node_modules/jshint/bin/jshint $(find "$BASEDIR/app" ! -path "$BASEDIR/app/node_modules/*" -name "*.js")
