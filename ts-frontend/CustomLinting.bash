#!/bin/bash
# check if any .ts or .tsx files have the word "string" in them, and warn that you should not be using that as a type unless its
# a user input
# if the line above contains //@cust-ignore
# then ignore the error
echo "Starting Custom Linting"
TOP_LEVEL_FOLDER_TO_SEARCH=$1


RED='\033[0;31m'
NC='\033[0m' # No Color

PREV_LINE=""
INGORE_FLAG="@cust-ignore"
STRING_TO_FIND="string"

NODE_MODULES_S="node_modules"

# find all files in given directory that end with .ts or .tsx
FILES_TO_SEARCH=$(find ${TOP_LEVEL_FOLDER_TO_SEARCH} -path node_modules -prune -name '*.ts' -o -name '*.tsx')
for file in $FILES_TO_SEARCH; do
    
    echo "custom linting search in file: ${file}"
    LINE_NUMBER=0
    while IFS= read -r line; do
        # $p is the line of text
        if [[ $PREV_LINE =~ "@cust-ignore" ]]; then
            # do nothing, the prev line was an ignore flag
            # echo "ignore flag found ${PREV_LINE}"
            :
        else
            if [[ $line =~ "string" ]]; then
                echo -e "${RED}WARNING: 'string' found${NC} \n in ${FILENAME} on line: ${LINE_NUMBER} \n... avoid using 'string' type in Typescript except for unknown user input variables. \n To get rid of this warning put //@cust-ignore on the line above where 'string' appears."
            fi
        fi
        PREV_LINE=$line
        LINE_NUMBER=$((LINE_NUMBER+1))
    done < "$file"
done