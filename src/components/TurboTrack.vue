<template>
  <div
    @click="showModalRequest"
    class="flex flex-col justify-between"
    :class="{ disabled: disabledTracks[tracks()[$attrs.id - 1]['tier']] === 1 }"
  >
    <div class="number grid place-items-center h-full select-none">
      {{ trackNumber }}
    </div>
    <div
      class="w-full bg-black border-t-4 border-black"
      v-if="flags['showTiers']"
    >
      <div
        class="difficulty text-sm h-2"
        :class="'t' + tracks()[$attrs.id - 1]['tier']"
        :style="{ width: (100 / 8) * tracks()[$attrs.id - 1]['tier'] + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
import trackInfo from "@/js/trackinfo.json";
import trackInfoConsole from "@/js/trackinfoConsole.json";

export default {
  name: "TurboTrack",
  props: {
    flags: {
      showTiers: {
        type: Boolean,
        default: false,
      },
      isConsole: {
        type: Boolean,
        default: false,
      },
    },
    disabledTracks: {
      default: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
      },
    },
  },
  data() {
    return {
      trackNumber: this.formatTrackNumber(this.$attrs.id),
    };
  },
  methods: {
    formatTrackNumber(id) {
      return id < 10 ? "0" + id : id;
    },
    showModalRequest() {
      this.$emit("modal-request", this.$attrs.id);
    },
    tracks() {
      return this.flags["isConsole"] ? trackInfoConsole : trackInfo;
    },
  },
};
</script>

<style lang="scss">
.number {
  border-image-slice: 1 !important;
  border: 3px solid;
  border-image-source: linear-gradient(143.23deg, #ffffff20 0%, #ffffff40 100%);
  &:hover {
    border-image-source: linear-gradient(
      143.23deg,
      #ffffff70 0%,
      #ffffff40 100%
    );
  }
  &:active {
    border-image-source: linear-gradient(
      143.23deg,
      #00000040 0%,
      #00000070 100%
    );
  }
}
</style>
