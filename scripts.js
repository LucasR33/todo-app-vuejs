var todos = []


const TodoApp = {
    data() {
        return {
            todos: window.todos,
            newTodo : {
                done: false
            }
        }
    },
    methods: {
        doneTodo: function(item){
            item.done = !item.done;
        },
        addTodo() {
            this.todos.push(this.newTodo);
            this.newTodo = {
                done: false
            }
        },
        clearTodo() {
            this.todos = []
        }
    }
}



Vue.createApp(TodoApp).mount("#app");