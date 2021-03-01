<template>
  <div class="cart">
    <div class="cart__badge">{{ cart.length }}</div>
    <CartItem v-for="(item, index) in cartData" :key="item.article" :cart-item-data="item" @deleteCartItem="deleteCartItem(index)"></CartItem>
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
    ...mapActions([
      'deleteCartItem'
    ]),
    deleteCartItem(index) {
      this.deleteCartItem(index);
    }
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style lang="scss">
.cart {
  width: 540px;
  box-shadow: 1px 5px 15px rgb(167, 166, 166);
  position: relative;
  margin-bottom: 40px;

  &__badge {
    position: absolute;
    left: -10px;
    top: -5px;
    background: rgb(228, 255, 187);
    border-radius: 8px;
    border: 1px solid #fff;
    padding: 15px;
    font-weight: bold;
    box-shadow: 1px 5px 10px rgb(180, 176, 176);
  }
}
</style>