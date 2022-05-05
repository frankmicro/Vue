import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter : 0,
        colorCode : 'red',
        value: 0
    },
    mutations:{
        increaseCounter(state, randomNumber) {
            state.counter += randomNumber
        },
        setColorCode(state, newColor) {
            state.colorCode = newColor
        }
    },
    actions:{
        increaseCounter({ commit }) {
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res => {
                commit('increaseCounter', res.data)
            })
        },
        setColorCode({ commit }, newColor) {
            commit('setColorCode', newColor)
        }
    },
    getters:{
        counterSquared(state) {
            return state.counter * state.counter
        }
    },
});