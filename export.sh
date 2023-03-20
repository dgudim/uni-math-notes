#!/bin/bash

bash ./build_index.sh

sudo mount --bind ../.obsidian ./source/.obsidian
sudo mount --bind ../uni ./source/uni

git add .

git commit -a

git push

sudo umount ./source/.obsidian
sudo umount ./source/uni
