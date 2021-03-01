<template>
  <div class="main-wrapper">
    <h1>hello {{ title }}</h1>
    <Catalog></Catalog>
    <Cart v-if="cart.length" :cartData="cart"></Cart>
  </div>
</template>

<script>
import Cart from "./cart";
import Catalog from "./catalog";
import { mapState } from "vuex";

export default {
  name: "main-wrapper",
  props: {},
  components: {
    Cart,
    Catalog,
  },
  data() {
    return {
      title: "dear firend",
    };
  },
  computed: {
    ...mapState(["cart"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("hello im working!");
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>