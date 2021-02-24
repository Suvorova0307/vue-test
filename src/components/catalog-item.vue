<template>
  <div class="catalog-item">
    <div>Item 1</div>
    <p>Price: 100</p>
    <button class="catalog-item__button">add to cart</button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.catalog-item {

  border-radius: 8px;
  padding: 20px;
  box-shadow: 5px 2px 10px rgb(145, 144, 144);


  &__button {
    padding: 15px;
    border-radius: 8px;
    background: $green;
    border: 1px solid #67e50a;
    outline: none;
    cursor: pointer;
  }
}
</style>
