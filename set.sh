#!/bin/sh

DIR=${1}
DATE=$(date +"%Y-%m-%d")
PATH_NAME=$(pwd)

if [ ! -d $DIR ]; then
    mkdir "$DIR"
    cp main.js $DIR
    cd $DIR
    touch input.txt
    touch main.js

    cd ..
    echo "- [$DIR](./$DIR) <time>• $DATE</time>" >> README.md
else 
    echo "'${1}' already exists at this location: $PATH_NAME"
fi