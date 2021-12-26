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

<style lang="scss">
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
.s-white {
  background-color: #949494;
  color: white;
}
.s-green {
  background-color: #679d2d;
  color: white;
}
.s-blue {
  background-color: #428bac;
  color: white;
}
.s-red {
  background-color: #ff311b;
  color: white;
}
.s-black {
  background-color: #202020;
  color: white;
}
</style>
