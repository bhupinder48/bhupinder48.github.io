<template>
  <div class="container-fluid border-bottom shadow-sm">
    <nav class="navbar navbar-expand-md p-3 navbar-light bg-white">
      <div class="container-fluid">
        <a href="#" class="d-block link-dark text-decoration-none">
          <img src="../../assets/adwolt-brand.png" width="80" height="35" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarsExample04"
        >
          <ul class="navbar-nav">
            <header-link
              :link="header.linkUrl"
              :linkText="header.linkText"
              :activeComponent="activeComponent"
              @select-header-link="changeActiveComponent"
              v-for="header in headers"
              v-bind:key="header.linkText"
            />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import HeaderLink from "@/components/header/HeaderLink.vue";

export default {
  name: "HeaderComponent",
  components: {
    HeaderLink,
  },
  data: function () {
    return {
      activeComponent: "Home",
      headers: [
        { linkText: "Home", linkUrl: "/" },
        { linkText: "About", linkUrl: "/about" },
        // { linkText: "Products", linkUrl: "/" },
        // { linkText: "Pricing", linkUrl: "/" },
        { linkText: "Contact Us", linkUrl: "/contact-us" },
      ],
    };
  },
  methods: {
    changeActiveComponent(componentName) {
      this.activeComponent = componentName;
    },
  },
};
</script>
