<template>
    <div>
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
    components: {
        Todo
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    },
    methods: {
        // toggleCheckbox(e) {
        //     this.$store.commit('TOGGLE_TODO', {
        //         id: this.todo.id,
        //         checked: e.target.checked
        //     })
        //     //this.$emit('toggle-checkbox', value)
        // },
        // deleteTodo() {
        //     this.$store.commit('DELELTE_TODO', this.todo.id);
        //     // this.$emit('click-delete', todoId);
        // }
    }
}
</script>

<style>

</style>
