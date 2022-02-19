<template>
  <div class="container">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
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
        class="nav nav-pills"
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
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="#" class="d-block link-dark text-decoration-none">
        <img src="../../assets/adwolt-brand.png" width="80" height="35" />
      </a>
      <span class="fs-1 fw-bolder"> WOLT</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bd-highlight" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <header-link
            link="/"
            linkText="Home"
            :activeComponent="activeComponent"
            @select-header-link="changeActiveComponent"
          />
          <header-link
            link="/about"
            linkText="About Us"
            :activeComponent="activeComponent"
            @select-header-link="changeActiveComponent"
          />
        </ul>
      </div>
    </div>
  </nav> -->
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
        { linkText: "Contact Us", linkUrl: "/" },
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
