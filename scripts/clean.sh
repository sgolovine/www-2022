#!/usr/bin/env sh

# This script will remove the following files & directories
# .next
# content
# dist
# node_modules
# src/__postmap__.json

$(which echo) "Cleaning the project"

$(which echo) "Deleting .next folder"
$(which rm) -rf ./.next

$(which echo) "Deleting content folder"
$(which rm) -rf ./content

$(which echo) "Deleting dist folder"
$(which rm) -rf ./dist

$(which echo) "Deleting node_modules folder"
$(which rm) -rf ./node_modules

$(which echo) "Deleting __postmap__.json file"
$(which rm) -rf ./src/__postmap__.json


$(which echo) "Successfully cleaned the project"
