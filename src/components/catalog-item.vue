<template>
  <div class="catalog-item">
    <div class="catalog-item__img">
      <img :src="require('../assets/img/' + productData.image)" alt="" />
    </div>
    <div class="catalog-item__name">{{ productData.name }}</div>
    <div class="catalog-item__price">Price: {{ productData.price }} р.</div>
    <button class="catalog-item__button btn" @click="addToCart">
      add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data:() => ({
  }),
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    }
  },
  
};
</script>

<style lang="scss">
.catalog-item {
  width: calc(100% / 3 - 40px);
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 5px 2px 10px rgb(145, 144, 144);

  &__img {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__button {
    padding: 15px;
    border-radius: 8px;
    background: $green;
    border: 1px solid #67e50a;
    outline: none;
    cursor: pointer;
  }

  &__name {
    color: #2c3e50;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  &__price {
    margin-bottom: 20px;
  }
}
</style>
