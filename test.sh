#!/bin/sh

EXEC_DIR=${1}
BASE_DIR="$MY_CODE_FORCES/problems"

if [ ! -e "$BASE_DIR/$EXEC_DIR" ]; then 
    echo "$MY_CODE_FORCES/$TEMPLATE_FILE_NAME: No such file or directory"
else 
    cat "$BASE_DIR/$EXEC_DIR/input.txt" | node "$BASE_DIR/$EXEC_DIR/main.js"
fi
