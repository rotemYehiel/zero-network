<template>
  <section v-bind:class="{'navbar': isOpenNavbar, 'thin-navbar': !isOpenNavbar}">
    <header @click="this.toggleNavbar">
      <mainLogo v-if="isOpenNavbar" />
      <smallLogo v-else />
    </header>

    <hr class="separator" />

    <section class="network-prevention">
      <h2 v-if="isOpenNavbar" class="sub-title-navbar">Network prevention</h2>
      <h2 v-else class="sub-title-navbar">NP</h2>
      <linkPreview
        :isOpenNavbar="isOpenNavbar"
        v-for="link in networkLinks"
        :key="link.title"
        :link="link"
      />
    </section>

    <hr class="separator" />

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

// icons cmps
import mainLogo from "../components/icons/mainLogo";
import smallLogo from "../components/icons/smallLogo";

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
      return this.logos[0];
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
    mainLogo,
    smallLogo
  }
};
</script>
