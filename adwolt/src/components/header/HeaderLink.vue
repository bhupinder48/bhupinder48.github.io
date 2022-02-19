<template>
  <li class="nav-item">
    <router-link
      class="nav-link fs-5 fw-bold text-secondary"
      :class="{ 'active text-white bg-danger': isActive() }"
      @click="selectLink"
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
    selectLink() {
      this.$emit("select-header-link", this.linkText);
    },
  },
};
</script>
