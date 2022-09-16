#!/bin/bash
# This script will yank the version from package.json
# As well as yanking the current commit in teh git repo
# And echoing that to a configuration file this config 
# file will be picked up by the frontend and displaying
# it in the sidebar.

PKG_VERSION=`node -p "require('./package.json').version"`
LATEST_COMMIT=`git rev-parse HEAD`



echo "Generating new version"
echo "PKG_VERSION = $PKG_VERSION"
echo "LATEST_COMMIT = $LATEST_COMMIT"


cat << EOF > ./src/__version__.json
{
  "version": "$PKG_VERSION",
  "commit": "$LATEST_COMMIT"
}
EOF

echo "Sucessfully wrote version to src/version.json"
exit 0
