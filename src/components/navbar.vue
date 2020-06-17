<template>
  <section :class="{'navbar': isOpenNavbar, 'thin-navbar': !isOpenNavbar}">
    <header @click="this.toggleNavbar">
      <svg-icon :svg-id="logo.icon" classes="import-icon" />
    </header>

    <div class="box"></div>

    <section class="network-prevention">
      <h2 v-if="isOpenNavbar" class="sub-title-navbar">NETWORK PREVENTION</h2>
      <h2 v-else class="sub-title-navbar">NP</h2>
      <linkPreview
        :isOpenNavbar="isOpenNavbar"
        v-for="link in networkLinks"
        :key="link.title"
        :link="link"
      />
    </section>

    <section class="rest-of-links">
      <linkPreview
        :isOpenNavbar="isOpenNavbar"
        v-for="link in restoflinks"
        :key="link.title"
        :link="link"
      />
    </section>
  </section>
</template>
<script>
import linkPreview from "./linkPreview";
import svgIcon from "./svg-icon";

export default {
  name: "navnar",
  data() {
    return {
      isOpenNavbar: true
    };
  },
  computed: {
    links() {
      return this.$store.getters.links;
    },
    logos() {
      return this.$store.getters.logos;
    },
    logo() {
      return this.isOpenNavbar ? this.logos[0] : this.logos[1];
    },
    networkLinks() {
      const links = this.links.filter(link => {
        return link.type === "Network prevention";
      });
      return links;
    },
    restoflinks() {
      const links = this.links.filter(link => {
        return link.type === "rest of links";
      });
      return links;
    }
  },
  methods: {
    toggleNavbar() {
      this.isOpenNavbar = !this.isOpenNavbar;
    }
  },
  components: {
    linkPreview,
    svgIcon
  }
};
</script>
