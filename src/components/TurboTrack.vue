<template>
  <div>
    <div class="number grid content-center h-full">
      {{ trackNumber }}
    </div>
    <div class="difficulty"></div>
  </div>
</template>

<script>
export default {
  name: "TurboTrack",
  data() {
    return {
      trackNumber: this.formatTrackNumber(this.$attrs.id),
    };
  },
  methods: {
    formatTrackNumber(id) {
      return id < 10 ? "0" + id : id;
    },
  },
};
</script>

<style scoped></style>
