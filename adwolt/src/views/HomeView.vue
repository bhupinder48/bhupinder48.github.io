<template>
  <div class="container-fluid">
    <home-component />
  </div>
</template>

<script>
import HomeComponent from "@/components/home/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
  },
};
</script>
