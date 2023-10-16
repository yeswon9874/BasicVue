import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';
export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
        ],
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {
        getUsers({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data);
            });
        },
        addTodo({commit}, value) {
            setTimeout(() => {
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({commit}, payload) {
            setTimeout(() => {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        delteTodo({commit}, todoId) {
            setTimeout(() => {
                commit('DELETE_TODO', todoId);
            }, 500);
        },
    },
    getters: {

    }
});