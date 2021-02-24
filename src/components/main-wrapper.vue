<template>
  <div class="main-wrapper">
    <h1>hello {{ title }}</h1>
    <Catalog></Catalog>
  </div>
</template>

<script>
import Catalog from './catalog'
export default {
  name: "main-wrapper",
  props: {},
  components: {
    Catalog,},
  data() {
    return {
      title: "dear firend",
    };
  },
  computed: {},
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