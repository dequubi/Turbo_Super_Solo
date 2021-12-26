<template>
  <div
    @click="showModalRequest"
    class="flex flex-col justify-between"
    :class="{ disabled: disabledTracks[tracks[$attrs.id - 1]['tier']] === 1 }"
  >
    <div class="number grid place-items-center h-full">
      {{ trackNumber }}
    </div>
    <div class="w-full bg-black border-t-4 border-black" v-if="showTiers">
      <div
        class="difficulty text-sm h-2"
        :class="'t' + tracks[$attrs.id - 1]['tier']"
        :style="{ width: (100 / 8) * tracks[$attrs.id - 1]['tier'] + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
import trackInfo from "@/js/trackinfo.json";

export default {
  name: "TurboTrack",
  props: {
    showTiers: {
      type: Boolean,
      default: false,
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
      tracks: trackInfo,
    };
  },
  methods: {
    formatTrackNumber(id) {
      return id < 10 ? "0" + id : id;
    },
    showModalRequest() {
      this.$emit("modal-request", this.$attrs.id);
    },
  },
};
</script>

<style lang="scss">
.number {
  border-image-slice: 1 !important;
  border: 3px solid;
  border-image-source: linear-gradient(143.23deg, #ffffff20 0%, #ffffff40 100%);
  &:active {
    border-image-source: linear-gradient(
      143.23deg,
      #ffffff40 0%,
      #ffffff20 100%
    );
  }
}
</style>
