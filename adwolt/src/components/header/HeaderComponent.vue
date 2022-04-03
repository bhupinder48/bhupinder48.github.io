<template>
  <div class="container-fluid">
    <header
      class="d-flex flex-wrap justify-content-center py-3 border-bottom-header"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <a href="#" class="d-block link-dark text-decoration-none">
          <img src="../../assets/adwolt-brand.png" width="80" height="35" />
        </a>
        <span class="fs-1 fw-bolder"> WOLT</span>
      </a>
      <ul
        class="nav nav-links"
        v-for="header in headers"
        v-bind:key="header.linkText"
      >
        <header-link
          :link="header.linkUrl"
          :linkText="header.linkText"
          :activeComponent="activeComponent"
          @select-header-link="changeActiveComponent"
        />
      </ul>
    </header>
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
        { linkText: "Products", linkUrl: "/" },
        { linkText: "Pricing", linkUrl: "/" },
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
