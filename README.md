# Personal project for practice Vue.js

最终用 vue 写一套 vue 的学习笔记页面，包括每个知识点的 demo ，和笔记

v-model 是语法糖，在组件中可以自己实现一个 v-model ，做一个 demo 实践

虚拟 DOM 、Vue 和 React 通过虚拟 DOM 对真实浏览器 DOM 重新渲染对逻辑（同层级同位置比对去做删除和新增的方式、通过 DOM 的 id 去复用的方式）

Vue 的核心：组件的更新，技术实现原理，以及更新的逻辑（什么情况下更新）

计算属性 computed：用于大数据的情况下前端性能的提升

监听器 watch：监听数据的变化，执行任何想做的操作

computed 能做的，watch 都能做

watch 能做的，computed 不一定能做

但是，能用 computed 做的，尽量用 computed，watch 比 computed 更“底层”

生命周期函数：写个文章过一遍

函数式组件？？？ `functional: true` 例如用来在代码中做一个临时变量 ？？？

指令的本质到底是什么？就是个语法糖。
14种内置指令罗列，demo + 说明，一篇文章
v-text：替换掉当前标签里面的 innetText
v-html：替换掉当前标签里面的 innerText 并且解析为 HTML 进行渲染，注意 XSS 注入的风险
v-show：是否展示，但是已经渲染
v-if v-else-if v-else：是否渲染
v-for：循环
v-bind：绑定 data，简写为 :key='value'
v-on：事件，简写为 @event='handleEvent'
v-model：
v-slot：插槽
v-pre：后面 {{ text }} 里面的 text 不编译，直接原样输出为字符串
v-once：只执行一次，后续不再更新组件
v-cloak：？？？

自定义指令 and 生命周期钩子


---

in Terminal, input 'vim README.md' to open this file in Vim

find nothing can be done when u into this file in vim ?
---
it is now in command-mode, press 'i' to come to insert-mode.

when u finish editing, press 'ESC' to quit insert-mode and go back to command-mode

and then, press ':' to come to viewmode, press 'wq' to save and quit.

