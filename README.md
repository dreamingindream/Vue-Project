in Terminal, input 'vim README.md' to open this file in Vim

find nothing can be done when u into this file in vim ?
---
it is now in command-mode, press 'i' to come to insert-mode.

when u finish editing, press 'ESC' to quit insert-mode and go back to command-mode

and then, press ':' to come to viewmode, press 'wq' to save and quit.

---

how to start a project and publish it on github:
* create a new repository on github
* doing these things in your local computer
```
mkdir project-name
cd project-name
touch README.md
vi README.md

git init
git add .
git commit -m 'git init'
git push ...
```
