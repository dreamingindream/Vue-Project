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
})
