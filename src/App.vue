<template>
  <div id="app">
    <router-view></router-view>
    <navbar />
  </div>
</template>

<script>
import navbar from "./components/navbar";
export default {
  created() {
    this.$store.dispatch({ type: "loadLogos" });
    this.$store.dispatch({ type: "loadLinks" });
  },
  components: {
    navbar
  }
};
</script>

<style lang="scss">
</style>
