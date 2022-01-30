<template>
  <div
    class="modal-backdrop bg-black bg-opacity-40 fixed z-30 top-0 left-0 w-full h-full"
    @click.self="close"
  >
    <div class="content w-full ml-auto flex flex-col z-50" @click.self="close">
      <div
        class="modal bg-black text-white m-4 rounded-sm self-center max-w-xl w-11/12"
      >
        <header class="modal-header grid place-content-center mb-0 font-bold">
          <div id="header" class="text-xl h-9 grid place-content-center">
            Track #{{ currentTrack }}
          </div>
        </header>

        <div class="modal-body w-full">
          <div class="tabs">
            <ul
              class="tabs-header flex pl-2 pr-2 border-b-2"
              :class="'t' + tracks[currentTrack - 1]['tier']"
            >
              <li
                @click="tabChange(0)"
                :class="[
                  { 'not-selected': selectedTab != 0 },
                  't' + tracks[currentTrack - 1]['tier'],
                ]"
              >
                STM
              </li>
              <li
                @click="tabChange(1)"
                class="flex gap-1"
                :class="[
                  { 'not-selected': selectedTab != 1 },
                  't' + tracks[currentTrack - 1]['tier'],
                ]"
              >
                WR
                <img
                  v-if="tracks[currentTrack - 1]['i'] == 1"
                  class="self-center"
                  src="@/assets/padviz.svg"
                  alt="[inputs]"
                  width="20"
                  height="20"
                />
              </li>
              <li
                v-if="tracks[currentTrack - 1].hasOwnProperty('alt')"
                @click="tabChange(2)"
                class="flex gap-1"
                :class="[
                  { 'not-selected': selectedTab != 2 },
                  't' + tracks[currentTrack - 1]['tier'],
                ]"
              >
                Alternative
                <img
                  class="self-center"
                  src="@/assets/padviz.svg"
                  alt="[inputs]"
                  width="20"
                  height="20"
                />
              </li>
              <li
                v-if="tracks[currentTrack - 1].hasOwnProperty('nc')"
                @click="tabChange(3)"
                class="flex gap-1"
                :class="[
                  { 'not-selected': selectedTab != 3 },
                  't' + tracks[currentTrack - 1]['tier'],
                ]"
              >
                No cut
                <img
                  class="self-center"
                  src="@/assets/padviz.svg"
                  alt="[inputs]"
                  width="20"
                  height="20"
                />
              </li>
            </ul>
          </div>
          <div class="container">
            <youtube-iframe
              class="responsive-iframe"
              ref="ytb"
              :player-width="'100%'"
              :player-height="'100%'"
              :video-id="tracks[currentTrack - 1]['yt']"
              @ready="changeVolume"
            />
          </div>
          <div
            class="tier-container place-content-center text-black font-bold flex"
          >
            <div
              class="line w-full"
              :class="'t' + tracks[currentTrack - 1]['tier']"
            ></div>
            <div
              id="tier"
              class="w-32 text-center"
              :class="'t' + tracks[currentTrack - 1]['tier']"
            >
              Tier {{ tracks[currentTrack - 1]["tier"] }}
            </div>
            <div
              class="line w-full"
              :class="'t' + tracks[currentTrack - 1]['tier']"
            ></div>
          </div>
          <div
            class="grid p-2 pt-1 -mt-5"
            :class="{ 'grid-cols-3': isConsole, 'grid-cols-2': !isConsole }"
          >
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
            <div class="ml-auto mr-auto mt-1 text-gray-700" v-if="isConsole">
              console ver.
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
          class="rounded-sm bg-black border-2 border-gray-900 hover:bg-gray-900 active:bg-black select-none"
          :class="{ disabled: currentTrack == 1 }"
          :disabled="currentTrack == 1"
          @click="previousTrack"
        >
          Previous
        </button>
        <button
          type="button"
          class="rounded-sm bg-red-500 border-2 border-red-400 hover:bg-red-400 active:bg-red-600 select-none"
          @click="close"
        >
          Close
        </button>
        <button
          type="button"
          class="rounded-sm bg-black border-2 border-gray-900 hover:bg-gray-900 active:bg-black select-none"
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
import trackInfoConsole from "@/js/trackinfoConsole.json";

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
    isConsole: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tracks: this.getTracks(),
      currentTrack: this.trackId,
      isDesktop: this.platform === "desktop",
      selectedTab: 0,
    };
  },
  methods: {
    close() {
      this.$emit("closeModal");
      this.selectedTab = 0;
    },
    previousTrack() {
      if (this.currentTrack < 2) return;
      this.currentTrack -= 1;
      if (
        this.selectedTab == 2 &&
        !("alt" in this.tracks[this.currentTrack - 1])
      )
        this.selectedTab = 0;
      if (
        this.selectedTab == 3 &&
        !("nc" in this.tracks[this.currentTrack - 1])
      )
        this.selectedTab = 0;
      this.tabChange(this.selectedTab);
    },
    nextTrack() {
      if (this.currentTrack > 199) return;
      this.currentTrack += 1;
      if (
        this.selectedTab == 2 &&
        !("alt" in this.tracks[this.currentTrack - 1])
      )
        this.selectedTab = 0;
      if (
        this.selectedTab == 3 &&
        !("nc" in this.tracks[this.currentTrack - 1])
      )
        this.selectedTab = 0;
      this.tabChange(this.selectedTab);
      //this.$refs.ytb.cueVideoById(this.tracks[this.currentTrack - 1]["yt"]);
    },
    changeVolume() {
      this.$refs.ytb.setVolume(10);
    },
    getTracks() {
      return this.isConsole ? trackInfoConsole : trackInfo;
    },
    tabChange(tab) {
      this.selectedTab = tab;
      let id = "F2GL45MTUP0"; // default value
      switch (tab) {
        case 0:
          id = this.tracks[this.currentTrack - 1]["yt"];
          break;
        case 1:
          id = this.tracks[this.currentTrack - 1]["wr"];
          break;
        case 2:
          id = this.tracks[this.currentTrack - 1]["alt"];
          break;
        case 3:
          id = this.tracks[this.currentTrack - 1]["nc"];
          break;
        default:
          id = "F2GL45MTUP0";
          break;
      }
      this.$refs.ytb.cueVideoById(id);
    },
  },
};
</script>

<style scoped lang="scss">
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

.tabs {
  .tabs-header {
    background-color: black;
  }

  ul {
    gap: 1px;
    li {
      color: black;
      margin-bottom: -1px;
      user-select: none;
      cursor: pointer;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-top: 1px solid black;
      padding-left: 5px;
      padding-right: 5px;
      &.not-selected {
        margin-bottom: 0px;
        background-color: #000000;
        color: white;
        & img {
          filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
            saturate(7496%) hue-rotate(323deg) brightness(102%) contrast(104%);
        }
        &:hover {
          background-color: #2c2c2c;
        }
      }
    }
  }
}

.tier-container {
  .line {
    height: 2px;
  }

  #tier {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.pc-font-size-tm {
  font-size: 24px;
}

.pc-font-size {
  font-size: 20px;
}
</style>
