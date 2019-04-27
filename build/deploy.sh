#!/bin/sh

gitbook build
chmod -R 775 ./*
#sh ./build/upload-qiniu.sh
#sh ./build/replace-qiniu.sh
sh ./build/cp-website.sh
