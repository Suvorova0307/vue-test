<template>
  <div class="cart-item">
    <img
      class="cart-item__image"
      :src="require('../assets/img/' + cartItemData.image)"
      alt=""
    />
    <div class="cart-item__name">
      {{ cartItemData.name }}
    </div>
    <div class="cart-item__price">
      {{ cartItemData.price }}
    </div>
    <div class="cart-item__article">
      {{ cartItemData.article }}
    </div>
    <span class="cart-item__minus" @click="decrementItem">-</span>
    <div class="cart-item__count">{{ cartItemData.quantity }}</div>
    <span class="cart-item__plus" @click="incrementItem">+</span>
    <button @click="deleteCartItem">delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "cart-item",
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      'incerementCartItem',
      'decrementCartItem'
    ]),
    deleteCartItem() {
      this.$emit('deleteCartItem');
    },
    decrementItem() {
      this.decrementCartItem()
    },
    incrementItem() {
      this.incerementCartItem()
    }
  },

  computed: {},
};
</script>


<style lang="scss" scoped>
.cart-item {
  display: flex;
  box-shadow: 1px 5px 15px rgb(167, 166, 166);
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  padding: 10px 15px;

  &__image {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
}
</style>