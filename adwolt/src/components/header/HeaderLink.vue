<template>
  <li class="nav-item ms-3">
    <router-link
      class="nav-link fs-5 text-secondary"
      :class="{ 'active text-danger fw-bolder': isActive() }"
      :to="link"
      >{{ linkText }}</router-link
    >
  </li>
</template>
<script>
export default {
  name: "HeaderLink",
  props: ["linkText", "link", "activeComponent"],
  methods: {
    isActive() {
      return this.activeComponent === this.linkText;
    },
  },
};
</script>
