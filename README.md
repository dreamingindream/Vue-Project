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
Vue 造轮子起步：
readme: 使用本框架前，请在 CSS 中开启 border-box
```CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
做一个初步的最基础的 button 
两个知识点：CSS 变量让用户可以自己设置组件的样式；Vue 组件的写法

构建工具的选择：parcel 不够用之后再转为 webpack

npm install -D xxx  (-D: developer，开发者使用)

npx parcel // npm 在当前目录自己去找 parcel 并执行，不用自己写 parcel 所在的路径
parcel --no-cache  // 不使用缓存，否则改动的东西有可能并没有被 parcel

npm install -g git-open
在任何一个 git 目录下打开命令行，输入 git open 就可以直接打开 github 对应的页面