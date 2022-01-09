<template>
  <div
    class="modal-backdrop bg-black bg-opacity-40 fixed z-50 top-0 left-0 w-full h-full"
  >
    <div class="content w-full ml-auto flex flex-col">
      <div
        class="modal bg-black text-white m-4 rounded-sm self-center max-w-xl w-11/12"
      >
        <header class="modal-header grid place-content-center mb-0 font-bold">
          <div id="header" class="text-xl h-9 grid place-content-center">
            Track #{{ currentTrack }}
          </div>
        </header>

        <div class="modal-body w-full">
          <div class="container">
            <youtube-iframe
              class="responsive-iframe"
              ref="yt"
              :player-width="'100%'"
              :player-height="'100%'"
              :video-id="tracks[currentTrack - 1]['yt']"
              @ready="changeVolume"
            />
          </div>
          <div
            :class="'t' + tracks[currentTrack - 1]['tier']"
            class="mt-2 grid place-content-center text-black font-bold"
          >
            Tier {{ tracks[currentTrack - 1]["tier"] }}
          </div>
          <div class="flex justify-between p-2 pt-1">
            <div class="left">
              <div class="text-xl mb-1" :class="{ 'pc-font-size': isDesktop }">
                Regular Solo {{ isDesktop ? "Medals" : "" }}
              </div>
              <div
                class="flex items-center text-lg font-bold"
                :class="{ 'pc-font-size-tm': isDesktop }"
              >
                <div
                  class="rounded-full tm w-4 h-4 mr-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
                {{ tracks[currentTrack - 1]["rtm"] }}
              </div>
              <div
                class="flex items-center"
                :class="{ 'pc-font-size': isDesktop }"
              >
                <div
                  class="rounded-full g w-4 h-4 mr-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
                {{ tracks[currentTrack - 1]["g"] }}
              </div>
              <div
                class="flex items-center"
                :class="{ 'pc-font-size': isDesktop }"
              >
                <div
                  class="rounded-full s w-4 h-4 mr-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
                {{ tracks[currentTrack - 1]["s"] }}
              </div>
              <div
                class="flex items-center"
                :class="{ 'pc-font-size': isDesktop }"
              >
                <div
                  class="rounded-full b w-4 h-4 mr-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
                {{ tracks[currentTrack - 1]["b"] }}
              </div>
            </div>
            <div class="right flex flex-col items-end">
              <div class="text-xl mb-1" :class="{ 'pc-font-size': isDesktop }">
                Super Solo {{ isDesktop ? "Medals" : "" }}
              </div>
              <div
                class="flex items-center text-lg font-bold"
                :class="{ 'pc-font-size-tm': isDesktop }"
              >
                {{ tracks[currentTrack - 1]["stm"] }}
                <div
                  class="rounded-full tm w-4 h-4 ml-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
              </div>
              <div
                class="flex items-center"
                :class="{ 'pc-font-size': isDesktop }"
              >
                {{ tracks[currentTrack - 1]["sg"] }}
                <div
                  class="rounded-full g w-4 h-4 ml-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
              </div>
              <div
                class="flex items-center"
                :class="{ 'pc-font-size': isDesktop }"
              >
                {{ tracks[currentTrack - 1]["ss"] }}
                <div
                  class="rounded-full s w-4 h-4 ml-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
              </div>
              <div
                class="flex items-center"
                :class="{ 'pc-font-size': isDesktop }"
              >
                {{ tracks[currentTrack - 1]["sb"] }}
                <div
                  class="rounded-full b w-4 h-4 ml-1"
                  :class="{ 'w-5 h-5': isDesktop }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <footer class="modal-footer"></footer>
      </div>
      <div
        class="pt-0 h-20 self-center max-w-xl w-11/12 text-white grid grid-cols-3 gap-4"
      >
        <button
          type="button"
          class="rounded-sm bg-black border-2 border-gray-900 hover:bg-gray-900 active:bg-black"
          :class="{ disabled: currentTrack == 1 }"
          :disabled="currentTrack == 1"
          @click="previousTrack"
        >
          Previous
        </button>
        <button
          type="button"
          class="rounded-sm bg-red-500 border-2 border-red-400 hover:bg-red-400 active:bg-red-600"
          @click="close"
        >
          Close
        </button>
        <button
          type="button"
          class="rounded-sm bg-black border-2 border-gray-900 hover:bg-gray-900 active:bg-black"
          :class="{ disabled: currentTrack == 200 }"
          :disabled="currentTrack == 200"
          @click="nextTrack"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import trackInfo from "@/js/trackinfo.json";

export default {
  name: "TurboModal",
  props: {
    trackId: {
      type: Number,
      default: 1,
    },
    platform: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      tracks: trackInfo,
      currentTrack: this.trackId,
      isDesktop: this.platform === "desktop",
    };
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    previousTrack() {
      if (this.currentTrack < 2) return;
      this.currentTrack -= 1;
      this.$refs.yt.cueVideoById(this.tracks[this.currentTrack - 1]["yt"]);
    },
    nextTrack() {
      if (this.currentTrack > 199) return;
      this.currentTrack += 1;
      this.$refs.yt.cueVideoById(this.tracks[this.currentTrack - 1]["yt"]);
    },
    changeVolume() {
      this.$refs.yt.setVolume(10);
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.tm {
  background-color: #00ff28;
}

.g {
  background-color: #fff741;
}

.s {
  background-color: #e2e2e2;
}

.b {
  background-color: #a16d1e;
}

.pc-font-size-tm {
  font-size: 24px;
}

.pc-font-size {
  font-size: 20px;
}
</style>
