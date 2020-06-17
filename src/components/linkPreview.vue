<template>
  <div class="link-preview">
    <router-link :to="`${link.path}`" class="flex align-center direction-row">
      <svg-icon :svg-id="link.icon" classes="import-icon" />
      <div v-if="link.extensions">
        <svg-icon
          v-for="extension in link.extensions"
          :key="extension.name"
          :svg-id="extension.name"
          class="icon-extension"
        />
      </div>
      <h3 v-if="isOpenNavbar">{{link.title}}</h3>
      <div
        v-if="link.isActivePoint"
        :class="{'thin-navbar-mode-point': !isOpenNavbar,'active-link-point': isOpenNavbar }"
      ></div>
    </router-link>
  </div>
</template>

<script>
import svgIcon from "./svg-icon";

export default {
  name: "linkPreview",
  props: {
    link: Object,
    isOpenNavbar: Boolean
  },
  components: {
    svgIcon
  },
  computed: {
    isPrevention() {
      if (this.link.title === "Prevention") {
        return true;
      } else {
        return false;
      }
    },
    isDryRun() {
      if (this.link.title === "Dry Run") {
        return true;
      } else {
        return false;
      }
    },
    isPrerequisites() {
      if (this.link.title === "Prerequisites") {
        return true;
      } else {
        return false;
      }
    },
    isDashboard() {
      if (this.link.title === "Dashboard") {
        return true;
      } else {
        return false;
      }
    },
    isAssets() {
      if (this.link.title === "Assets") {
        return true;
      } else {
        return false;
      }
    },
    isActivities() {
      if (this.link.title === "Activities") {
        return true;
      } else {
        return false;
      }
    },
    isDetections() {
      if (this.link.title === "Detections") {
        return true;
      } else {
        return false;
      }
    },
    isChangeLog() {
      if (this.link.title === "Change log") {
        return true;
      } else {
        return false;
      }
    },
    isSettings() {
      if (this.link.title === "Settings") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
