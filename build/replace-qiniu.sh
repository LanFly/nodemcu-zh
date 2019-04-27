#!/bin/sh

match=$(grep "/@qiniu" -rl ./_book)

index=1
if [ ! "$match" = "" ]; then
  echo "This file are need to replace /@qiniu to http://lanfly.vicp.io"
  for file in ${match[@]}
  do
    echo "${index}: $file"
    index=$[$index+1]
  done
  sed -i -e "s/\/@qiniu/http:\/\/lanfly.vicp.io/g" $match
else
  echo "No file are need to replace @qiniu"
fi
