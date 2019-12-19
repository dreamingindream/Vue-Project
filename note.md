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

组件开发必备：高级特性之 provide/inject，跨组件通信

获取当前组件实例：`$vm.refs.xxx`  `<p ref='p'></p>`
跨组件获取组件实例：
递归方式一个层级一个层级的找（代码繁琐、访问低效）
主动通知、主动获取？？？ `callback ref` `v-ant-ref`

Template V.S. JSX

Template：
* 模版语法，HTML 的拓展
* 数据绑定使用 Mustache 语法，即双大括号
* 学习成本低，官方给你各种成熟的工具直接用，灵活性低

JSX：
* Javascript 的语法拓展
* 数据绑定使用单大括号
* 灵活，灵活，灵活

二者可以混合使用，只要你够牛逼，语言（语法）从来不是障碍。

本质：都是语法糖，最终都是编译成了 document.createElement

# Vuex：一种状态管理模式

通过属性层层传递、通过 provide/inject，之外的第三种管理模式