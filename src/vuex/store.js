import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },

    SET_CART: (state, product) => {
      let isProductExist = false;
      state.cart.map(function(item) {
        if (item.article === product.article) {
          isProductExist = true;
          item.quantity++;
        }
      });
      isProductExist || state.cart.push({ ...product, quantity: 1 });
    },
    REMOVE_CART_ITEM: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get("http://localhost:3000/products");
      commit("SET_PRODUCTS", response.data);
      // return axios.get("http://localhost:3000/products")

      // .then((products) => {
      //   commit('SET_PRODUCTS', products.data);
      //   return products;
      // })
      // .catch((error) => {
      //   console.log(error);
      //   return error;
      // });
    },
    AddToCart({ commit }, product) {
      commit("SET_CART", product);
    },
    deleteCartItem({ commit }, index) {
      commit("REMOVE_CART_ITEM", index);
    },
    incrementCartItem({commit}) {
      commit('INCREMENT')
    },
    decrementCartItem({commit}) {
      commit('DECREMENT')
    }
  },
  // getters: {
  //   cart(state) {
  //     return state.cart;
  //   }
  // }
});

export default store;
