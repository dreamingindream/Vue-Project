let app = new Vue({
  el: "#app",
  data: {
    message: "hello, Vue!"
  }
});

let app2 = new Vue({
  el: "#app2",
  data: {
    message: "this action triggered at " + new Date().toLocaleString()
  }
});

let app3 = new Vue({
  el: "#app3",
  data: {
    seen: true
  }
});

let app4 = new Vue({
  el: "#app4",
  data: {
    Todos: [{
      text: "learn Vue Doc."
    },
    {
      text: "write demos self."
    },
    {
      text: "wtite blogs for leaning processing."
    }
    ]
  }
});

let app5 = new Vue({
  el: "#app5",
  data: {
    msg: "Hello again."
  },
  methods: {
    reverseMsg: function () { // can not use ES 6 arrow fn --- ()=> here
      this.msg = this.msg.split("").reverse().join("");
    }
  }
});

let app6 = new Vue({
  el: "#app6",
  data: {
    msg: "this message will be auto filled."
  }
});

Vue.component("conponent-name", {
  // 注意这里 props 的写法，在 JS 里 props 中写驼峰，HLML 里写 -小写
  props: ["todoXXX"],
  template: "<li> {{todoXXX.text}} </li>"
});
let app7 = new Vue({
  el: "#app7",
  data: {
    todoItemsXXX: [
      { id: 0, text: "first thing to do." },
      { id: 1, text: "another thing to do." },
      { id: 2, text: "much things to do." },
      { id: 4, text: "I am tired." }
    ]
  }
});

Vue.component("todo-item", {
  props: ['title'],
  template: '\
        <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
    '
});
let todoListVue = new Vue({
  el: "#todo-list-demo",
  data: {
    newTodoText: '',
    XXX: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.XXX.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    removeTodoItem: function (index) {
      this.XXX.splice(index, 1)
    }
  }
});

let modelDemo = new Vue({
  el: "#model-demo",
  data: {
    message: ""
  }
});

let modelDemo2 = new Vue({
  el: "#model-demo-2",
  data: {
    // 如果默认值是 ''，那么实际存的是 checkbox 框是否被勾选 true/false
    // 如果默认值是 []，那么实际存的是 checkbox 的 value
    checkedValue: [],
    isChecked: ''
  }
});

let modelDemoRadio = new Vue({
  el: "#model-demo-radio",
  data: {
    // 这里默认值是 '' 或 [] ，取到的值都是 radio 的 value
    // 但是按照文档，最好是写 ''，因为这是单选框
    selectedValue: ''
  }
});

let modelDemoMultipleSelect = new Vue({
  el: "#model-demo-multiple-select",
  data: {
    selectedValue: ["666"]
  }
});

Vue.component("button-click-count", {
  // 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">u click me {{ count }} times</button>'
});
let componentDemo = new Vue({
  el: "#component-demo",
  data: {

  }
});

Vue.component("news-list", {
  inheritAttrs: false, // 不继承父级元素上当特性，写组件时常用
  props: {
    x: {
      type: Object,
      // required: true, // 当这里配置了 true 时，如果没有给组件传值，会报错，即此时无法用默认值
      default: function () {
        return {
          title: "default title",
          content: "default content",
          bottom: "default botom"
        }
      }
    }
  },
  template: `
        <div>
            <h3>{{ x.title }}</h3>
            <p>{{ x.content }}</p>
            <p>{{ x.bottom }}</p>
            <!-- 注意这里面 emit 出去的名字要加分号，而且不要写驼峰，因为渲染 HTML 的时候不区分大小写 -->
            <button @click="$emit('emit-name', {compute: 'add', size: 0.1})"> larger fontSize by 0.1</button>
            <button @click="$emit('emit-name', {compute: 'minus', size: 0.1})"> smaller fontSize by 0.1</button>
        </div>
    `
});
let componentDemo2 = new Vue({
  el: "#component-demo2",
  data: {
    newsList: [
      { id: 0, title: '1st News.', content: "there are news contents.", bottom: "this is the bottom of a news." },
      { id: 1, title: '2nd News.', content: "there are news contents.", bottom: "this is the bottom of a news." },
      { id: 2, title: '3rd News.', content: "there are news contents.", bottom: "this is the bottom of a news." },
      { id: 3, title: '4th News.', content: "there are news contents.", bottom: "this is the bottom of a news." }
    ],
    setFontSize: 1
  },
  methods: {
    largerFontSize: function (obj) { // 不能用箭头函数，因为要用到 this
      if ("add" === obj.compute) {
        this.setFontSize += obj.size;
      } else if ("minus" === obj.compute) {
        this.setFontSize -= obj.size;
      }
    }
  }
});

let slotDemoComponent = {
  template: `
    <div>
      <a href="https://vuejs.org">Vue.js</a>
      <slot>default content for a slot</slot>
    </div>
  `
}
let slotDemo = new Vue({
  el: "#slot-demo",
  components: {
    "slot-demo-component": slotDemoComponent
  }
});

let xxooUnit = {
  template: `
    <div class="unit" @click="$emit('click-unit')">
      {{ value }}
    </div>
  `,
  computed: {
    value: function () {
      return this.count % 2 ? "X" : "O";
    }
  },
  props: ["count"]
}
let xxoo = new Vue({
  el: "#xxoo",
  components: {
    "xxoo-unit": xxooUnit
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    clickUnit: function () {
      console.log('jinglaile')
      this.count++;
    }
  }
});