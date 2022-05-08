<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" style="padding-left: 0px; padding-right: 0px">
        <carousel-component />
      </div>
    </div>
  </div>
  <div class="container-fluid mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-danger fw-bold">About Us</h1>
        </div>
      </div>
    </div>
    <about-component />
  </div>
  <div class="container">
    <products-home-view />
  </div>
</template>

<script>
import CarouselComponent from "@/components/home/CarouselComponent.vue";
import ProductsHomeView from "@/components/products/ProductsHomeComponent.vue";
import AboutComponent from "@/components/about/AboutComponent.vue";

export default {
  components: { CarouselComponent, ProductsHomeView, AboutComponent },
  name: "HomeComponent",
};
</script>
