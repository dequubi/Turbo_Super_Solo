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

<style>
.t1 {
  background-color: #00ff28;
}
.t2 {
  background-color: #7be900;
}
.t3 {
  background-color: #a8d000;
}
.t4 {
  background-color: #c8b600;
}
.t5 {
  background-color: #e09800;
}
.t6 {
  background-color: #f17700;
}
.t7 {
  background-color: #fb5000;
}
.t8 {
  background-color: #ff0000;
}
.disabled {
  opacity: 0.3;
}
</style>
