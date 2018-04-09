#!/bin/bash

BASEDIR=$(dirname "$0")
$BASEDIR/../node_modules/jshint/bin/jshint $(find "$BASEDIR/.." ! -path "$BASEDIR/../node_modules/*" -name "*.js")
