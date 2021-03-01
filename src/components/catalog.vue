<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__items">
      <catalog-item
        v-for="product in products"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      ></catalog-item>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./catalog-item";
import { mapActions, mapState } from "vuex";

export default {
  components: { CatalogItem },
  name: "catalog",
  data: () => ({}),
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["getProducts", "AddToCart"]),
    addToCart(data) {
      this.AddToCart(data);
    },
    // async test() {
    //   return new Promise( (resolve)=> {
    //     setTimeout(()=> {
    //       resolve('1223');
    //     }, 3000)
    //   })
    // }
  },
  async mounted() {
    await this.getProducts();
    console.log("data arrived");
  },
};
</script>

<style lang="scss">
.catalog {
  width: 100%;
  padding: 0 200px;
  &__items {
    width: 100%;
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>