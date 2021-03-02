<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <router-link :to="{name: 'cart', params: {cartData: cart}}">

      <div class="catalog__cart">
        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1364 30.0002H8.04545C5.37273 30.0002 3.08182 27.9915 2.95455 25.435L2 9.30469H26.1818L25.1636 25.435C25.0364 27.9915 22.8091 30.0002 20.1364 30.0002Z" stroke="#FF1F6C" stroke-width="2.5"/>
        <path d="M9 15.3912V6.86953C9 4.19129 11.2909 2 14.0909 2V2C16.8909 2 19.1818 4.19129 19.1818 6.86953V15.3912" stroke="#FF1F6C" stroke-width="2.5"/>
        </svg>
        <div class="catalog__cart-badge">{{ cart.length }}</div>
      </div>
    </router-link>
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
    ...mapState(['products', 'cart']),
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

  &__cart {
    position: absolute;
    right: 10%;
    &-badge {
      position: absolute;
      left: -15px;
      top: -8px;
      background: #ffbfd7;
      border-radius: 8px;
      border: 1px solid #fff;
      padding: 5px;
      font-weight: bold;
      box-shadow: 1px 5px 10px rgb(180, 176, 176);
    }
  }
}
</style>