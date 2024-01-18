#!/bin/sh

read -p "Enter the problem index: " INDEX 

if [[ ! $INDEX =~ ^[A-Za-z0-9]+$ ]]; then exit
else INDEX=`echo $INDEX | tr '[a-z]' '[A-Z]'`
fi

read -p "Enter the problem name: " NEW_FILE_NAME

if [ ! $NEW_FILE_NAME ]; then exit

else 
    DIR="$MY_CODE_FORCES/problems/$NEW_FILE_NAME"
    DATE=$(date +"%Y-%m-%d")
    TEMPLATE_FILE_NAME="main.js"

    if [ ! -e "$MY_CODE_FORCES/$TEMPLATE_FILE_NAME" ]; then 
        echo "$MY_CODE_FORCES/$TEMPLATE_FILE_NAME: No such file or directory"  

    elif [ -d $DIR ]; then
        echo "'$NEW_FILE_NAME' is already exists at this location: $MY_CODE_FORCES"

    else [ ! -d $DIR ]
        i=0
        while [ $i -lt 12 ]
        do
            case $(($i % 6)) in
            0) j="𓃉𓃉𓃉" ;;
            1) j="𓃉𓃉∘" ;;
            2) j="𓃉∘°" ;;
            3) j="∘°∘" ;;
            4) j="°∘𓃉" ;;
            5) j="∘𓃉𓃉" ;;
            esac
            echo -en "\r $j "
            sleep 0.1
            ((i=i+1))
        done

        # 새로운 디렉토리 생성 
        mkdir -p $DIR
        cp "$MY_CODE_FORCES/$TEMPLATE_FILE_NAME" $DIR
        cd $DIR
        touch input.txt

        # README.md 업데이트 
        cd $MY_CODE_FORCES
        echo "| $INDEX | [$NEW_FILE_NAME](./$DIR) | $DATE | " >> README.md

        # vscode 실행 
        echo "All Done!"
        code $MY_CODE_FORCES
    fi
fi
