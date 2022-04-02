<template>
  <div class="row">
    <div class="col-md-12">
      <carousel-component />
    </div>
  </div>
  <products-home-view />
</template>

<script>
import CarouselComponent from "@/components/home/CarouselComponent.vue";
import ProductsHomeView from "@/components/products/ProductsHomeComponent.vue";

export default {
  components: { CarouselComponent, ProductsHomeView },
  name: "HomeComponent",
};
</script>
