import * as types from '../types'
const state = {
    cart : [],
    inventory : []
}

const mutations = {
    [types.MUTATE_INVENTORY] : (state, payload) => {
        state.inventory = payload
    },
    [types.MUTATE_ADDTO_CART] : (state, payload) => {
        if (payload.quantity != undefined) {
            let tempCart = state.cart.filter((res) => {return res.id == payload.id})
            if (tempCart.length > 0) {
                var index = state.cart.map(x => {
                    return x.id;
                }).indexOf(payload.id);
                state.cart.splice(index,1)
                tempCart = tempCart.map((res) => ({
                    ...res, 'total' : (res.price['USD'] * payload.quantity + parseFloat(res.total)),
                    'totalQuantity':res.totalQuantity + payload.quantity
                    }))
            } else {
                tempCart = state.inventory.filter(res => 
                    res.id == payload.id
            ).map((res) => ({
                ...res, 'total' : (res.price['USD'] * payload.quantity),
                'totalQuantity':payload.quantity
                }))
            }
            state.cart.push(tempCart[0]);
            tempCart = [];
        }
    },
    [types.MUTATE_DELETE_CART_ITEM] : (state, payload) => {
        var index = state.cart.map(x => {
            return x.id;
          }).indexOf(payload.id);
          state.cart.splice(index,1)
    }
}

const actions = {
    [types.ADD_TO_CART] : ({commit}, payload) => {
        commit(types.MUTATE_ADDTO_CART, payload)
    },
    [types.SET_INVENTORY] : ({commit}, payload) => {
        commit(types.MUTATE_INVENTORY, payload)
    },
    [types.DELETE_CART_ITEM] : ({commit}, payload) => {
        commit(types.MUTATE_DELETE_CART_ITEM, payload)
    }
}

const getters = {
    [types.GET_INVENTORY] : state => {
        return state.inventory
    },
    [types.GET_ACTIVE_INVENTORY] : state => {
        return state.inventory.filter((res) => {
            return res.status == "active"
        })
    },
    [types.GET_SHOPPING_CART] : state => {
        return state.cart
    },
    [types.GET_CART_SUBTOTAL] : state => {
        return state.cart.reduce((acc, res) => {
            return acc += res.total
        },0)
    },
    [types.GET_CART_SUBQUANTITY] : state => {
        return state.cart.reduce((acc, res) => {
            return acc += res.totalQuantity
        },0)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}