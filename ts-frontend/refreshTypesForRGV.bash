#!/bin/bash


echo "Starting refreshTypesForRGV.bash"
cp ./packageJSONForReactGraphVis.json ./node_modules/react-graph-vis/package.json
cp ./typeDefsForReactGraphVis.d.ts ./node_modules/react-graph-vis/lib/index.d.ts