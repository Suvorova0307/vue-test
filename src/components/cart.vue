<template>
  <div class="cart">
    <h2 v-if="!cart.length">Ваша корзина пуста</h2>
    <router-link :to="{ name: 'catalog' }">
      <div class="cart__link-back">back to catalog</div>
    </router-link>
    <CartItem
      v-for="(item, index) in cartData"
      :key="item.article"
      :cart-item-data="item"
      @deleteCartItem="deleteItem(index)"
    ></CartItem>
    <div class="cart__total">Итого {{ cartTotalCost }}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CartItem from "./cart-item";
export default {
  components: { CartItem },
  name: "cart",
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["deleteCartItem"]),
    deleteItem(index) {
      this.deleteCartItem(index);
    },
  },
  computed: {
    ...mapState(["cart"]),
    cartTotalCost() {
      let result = [];
      if (this.cartData.length) {
        for (let item of this.cartData) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
};
</script>

<style lang="scss">
.cart {
  width: 540px;
  position: relative;
  margin-bottom: 40px;

  &__link-back {
    margin-bottom: 20px;
    font-family: sans-serif;
    color: rgb(255, 0, 128);
    font-weight: bold;
    text-decoration: none;
  }

  &__total {
    font-size: 32px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>