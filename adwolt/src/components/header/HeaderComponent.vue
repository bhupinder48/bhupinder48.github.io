<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Adwolt</a>
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
  </nav>
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
    };
  },
  methods: {
    changeActiveComponent(componentName) {
      this.activeComponent = componentName;
    },
  },
};
</script>
