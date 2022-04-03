<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" style="padding-left: 0px; padding-right: 0px">
        <carousel-component />
      </div>
    </div>
  </div>
  <div class="container">
    <products-home-view />
  </div>
</template>

<script>
import CarouselComponent from "@/components/home/CarouselComponent.vue";
import ProductsHomeView from "@/components/products/ProductsHomeComponent.vue";

export default {
  components: { CarouselComponent, ProductsHomeView },
  name: "HomeComponent",
};
</script>
