#!/bin/bash

BASEDIR=$(dirname "$0")
$BASEDIR/app/node_modules/.bin/jsdoc -d $BASEDIR/docs $(find $BASEDIR/app -not -path "$BASEDIR/app/node_modules/*" -not -path "$BASEDIR/app/tests/*" -name "*.js")
