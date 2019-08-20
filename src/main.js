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
            this.msg = this.msg.split("").reverse().join("")
        }
    }
});

let app6 = new Vue({
    el: "#app6",
    data: {
        msg: "this message will be auto filled."
    }
});

Vue.component("todo-item", {
    props: ["todo"],
    template: "<li> {{todo.text}} </li>"
});

let app7 = new Vue({
    el: "#app7",
    data: {
        todoItems: [
            {id: 0, text: "first thing to do."},
            {id: 1, text: "another thing to do."},
            {id: 2, text: "much things to do."},
            {id: 4, text: "I am tired."},
        ]
    }
});
