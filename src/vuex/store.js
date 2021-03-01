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
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map(function(item) {
          if (item.article === product.article) {
            isProductExist = true;
            item.quantity++;
          }
        });
        if (!isProductExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product)
      }
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
  },
  // getters: {
  //   cart(state) {
  //     return state.cart;
  //   }
  // }
});

export default store;
