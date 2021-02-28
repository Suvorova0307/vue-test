import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [

    ]
  },
  mutation: {
    SET_PRODUCTS: (state : products) => {
      state.products = products;
    }
  },
  actions: {
     GET_PRODUCTS({commit}) {
       return axios('http://localhost:3000/products', {
        method: "GET"
       })
       .then((products) =>{
         commit('SET_PRODUCTS', products);
       })
     }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  }
});

export default store;
