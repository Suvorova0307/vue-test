<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__items">
      <CatalogItem></CatalogItem>
      <CatalogItem></CatalogItem>
      <CatalogItem></CatalogItem>
      <CatalogItem></CatalogItem>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./catalog-item";

export default {
  components: { CatalogItem },
  name: "catalog",
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
    }
  }
</style>