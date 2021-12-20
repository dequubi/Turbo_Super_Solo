<template>
  <turbo-mobile v-if="mobile" />
  <turbo-desktop v-else />
</template>

<script>
import { isMobile } from "mobile-device-detect";
import TurboMobile from "./components/TurboMobile.vue";
import TurboDesktop from "./components/TurboDesktop.vue";

export default {
  name: "App",
  components: {
    TurboMobile,
    TurboDesktop,
  },
  data() {
    return {
      mobile: isMobile,
    };
  },
};
</script>

<style></style>
