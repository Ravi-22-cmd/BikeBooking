#!/bin/bash


while true
do
    git add .
    git commit -m "Auto update: $(date '+%Y-%m-%d %H:%M:%S')" 2>/dev/null
    git push origin master 2>/dev/null
    echo "✅ Changes pushed at $(date '+%H:%M:%S')"
    sleep 60  
done
