#!/bin/zsh

#add non-ignored files to the tree
git add --all
#commit to git repository
git commit
#push to github
git push -u origin master
