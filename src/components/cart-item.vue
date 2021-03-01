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
    <div class="cart-item__count">{{ cartItemData.quantity }}</div>
    <button @click="deleteCartItem">delete</button>
  </div>
</template>

<script>
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
    deleteCartItem() {
      this.$emit('deleteCartItem');
    }
  },
  mounted() {
    this.$set(this.cartItemData, "quantity", 1);
  },
  computed: {},
};
</script>


<style lang="scss" scoped>
.cart-item {
  display: flex;
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