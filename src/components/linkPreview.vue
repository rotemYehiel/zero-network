<template>
  <div class="link-preview">
    <router-link
      :to="`${link.path}`"
      class="navbar-link flex align-center direction-row"
      v-on:active="this.changeActiveMode"
    >
      <Prerequisites class="link-icon" v-if="isPrerequisites" />
      <DryRun class="link-icon" v-if="isDryRun" />
      <Prevention class="link-icon" v-if="isPrevention" />
      <Dashboard class="link-icon" v-if="isDashboard" />
      <Assets class="link-icon" v-if="isAssets" />
      <Activities class="link-icon" v-if="isActivities" />
      <Detections class="link-icon" v-if="isDetections" />
      <ChangeLog class="link-icon" v-if="isChangeLog" />
      <Settings
        class="settings-icon"
        v-if="isSettings"
        :style="[(isOpenNavbar)? {margin: '9.5px'}: {margin: '8.7px'}]"
      />

      <!-- <h3 :style="[(isOpenNavbar)? {display: 'inline-block'}: {display: 'none'}]">{{link.title}}</h3> -->
      <h3 v-if="isOpenNavbar">{{link.title}}</h3>
      <div :class="{'thin-navbar-mode-point': !isOpenNavbar,'active-link-point': isOpenNavbar }"></div>
    </router-link>
  </div>
</template>

<script>
import Prerequisites from "./icons/Prerequisites";
import DryRun from "./icons/DryRun";
import Prevention from "./icons/Prevention";
//
import Dashboard from "./icons/Dashboard";
import Assets from "./icons/Assets";
import Activities from "./icons/Activities";
import Detections from "./icons/Detections";
import ChangeLog from "./icons/ChangeLog";
import Settings from "./icons/Settings";

export default {
  name: "linkPreview",
  data() {
    return {
      isActiveMode: false
    };
  },
  props: {
    link: Object,
    isOpenNavbar: Boolean
  },
  components: {
    Prerequisites,
    DryRun,
    Prevention,
    Dashboard,
    Assets,
    Activities,
    Detections,
    ChangeLog,
    Settings
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
  },
  methods: {
    changeActiveMode() {
      this.isActiveMode = !this.isActiveMode;
      console.log("r u active?:", this.isActiveMode);
    }
  }
};
</script>
