import { createStore } from "vuex";
import counters from './modules/counters';
import shopping from './modules/shopping'

export default createStore({
    modules:{
        counters,
        shopping
    }
})