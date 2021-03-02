<template>
  <div class="main-wrapper">
    <h1>hello {{ title }}</h1>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "main-wrapper",
  props: {},
  components: {
  },
  data() {
    return {
      title: "dear firend",
    };
  },
 
  methods: {},
  watch: {},
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