<template>
  <div class="bg-black flex flex-col h-screen overflow-y-auto">
    <transition name="modal-fade">
      <turbo-modal
        v-if="modalVisible"
        @close-modal="modalVisible = false"
        :trackId="selectedTrack"
        :platform="'desktop'"
        :isConsole="flags['isConsole']"
      />
    </transition>
    <div class="flex justify-center mt-2">
      <div class="grid grid-cols-5 w-full max-w-7xl gap-1">
        <img src="@/assets/solo.jpg" alt="Turbo" />
        <img src="@/assets/canyon.jpg" alt="Canyon" />
        <img src="@/assets/valley.jpg" alt="Valley" />
        <img src="@/assets/lagoon.jpg" alt="Lagoon" />
        <img src="@/assets/stadium.jpg" alt="Stadium" />
        <img src="@/assets/series-white.jpg" alt="White series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': flags['showTiers'] }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 0"
            class="s-white"
            :id="m + (n - 1) * 10 + 0"
            @modal-request="showModal"
            :flags="flags"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-green.jpg" alt="Green series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': flags['showTiers'] }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 40"
            class="s-green"
            :id="m + (n - 1) * 10 + 40"
            @modal-request="showModal"
            :flags="flags"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-blue.jpg" alt="Blue series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': flags['showTiers'] }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 80"
            class="s-blue"
            :id="m + (n - 1) * 10 + 80"
            @modal-request="showModal"
            :flags="flags"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-red.jpg" alt="Red series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': flags['showTiers'] }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 120"
            class="s-red"
            :id="m + (n - 1) * 10 + 120"
            @modal-request="showModal"
            :flags="flags"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-black.jpg" alt="Black series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': flags['showTiers'] }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 160"
            class="s-black"
            :id="m + (n - 1) * 10 + 160"
            @modal-request="showModal"
            :flags="flags"
            :disabledTracks="disabledTracks"
          />
        </div>
      </div>
    </div>
    <div class="mt-2 border-t-2 border-gray-900"></div>
    <div class="footer flex self-center max-w-7xl gap-20 w-full mt-2">
      <div class="buttons flex justify-between w-full">
        <div>
          <button
            class="bg-gray-500 text-white rounded-sm p-1 pl-2 pr-2 w-64 h-12 hover:bg-gray-400 active:bg-gray-500 select-none"
            @click="flags['showTiers'] = !flags['showTiers']"
          >
            Toggle STM tiers
          </button>
          <div class="buttons flex gap-1 mt-1">
            <button
              class="bg-gray-500 text-white rounded-sm hover:bg-gray-400 active:bg-gray-500 select-none w-full"
              @click="flags['isConsole'] = !flags['isConsole']"
            >
              Switch to {{ flags["isConsole"] ? "PC" : "console" }} version
            </button>
            <div
              class="tooltip bg-gray-500 text-white text-center rounded-sm select-none w-8"
            >
              ?
              <span class="tooltip-text text-left rounded-sm flex items-center"
                >On consoles all thousandths on STMs are rounded down, which
                makes most STMs a bit harder to get. This also changes other
                super medals.
              </span>
            </div>
          </div>
        </div>

        <div id="tier-toggles" class="z-10">
          <div
            id="tiers"
            class="flex justify-between gap-1 text-black h-12 select-none"
          >
            <div
              v-for="n in 8"
              :key="n"
              class="tier grid place-content-center rounded-sm w-12 cursor-pointer"
              :class="[{ disabled: disabledTracks[n] === 1 }, 't' + n]"
              @click="toggle(n)"
            >
              {{ n }}
            </div>
          </div>
          <div class="buttons grid grid-cols-2 gap-1 mt-1">
            <button
              class="bg-gray-500 text-white rounded-sm hover:bg-gray-400 active:bg-gray-500 select-none"
              @click="disableAll"
            >
              Disable all
            </button>
            <button
              class="bg-gray-500 text-white rounded-sm hover:bg-gray-400 active:bg-gray-500 select-none"
              @click="enableAll"
            >
              Enable all
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 grid grid-cols-3 text-gray-500">
      <div class="grid place-content-center">
        <a
          class="cursor-pointer text-blue-200 hover:underline text-center"
          @click="forceMobile"
          >Force mobile version</a
        >
      </div>
      <div class="info flex flex-col items-center">
        <p id="author" class="text-white">
          made by
          <a
            href="https://github.com/ShaidenUNI"
            class="font-author italic text-3xl underline"
            >dequubi</a
          >
        </p>
        <p id="ver" class="text-sm">{{ version }}</p>
      </div>
      <p class="grid place-content-center text-center">
        All information was taken form the
        <a
          href="https://docs.google.com/spreadsheets/d/1NgkSbAMPm3VcLhXi1Z5oLPQQ8vCjcCSI2S_U_lTOkPA/edit#gid=193237318"
          class="text-blue-200 text-center hover:underline"
          >Trackmania Turbo Center Spreadsheet</a
        >
      </p>
    </div>
    <p class="mt-6 text-gray-500 flex justify-center">
      Found an issue? Leave it
      <a
        href="https://github.com/ShaidenUNI/Turbo_Super_Solo/issues"
        class="text-blue-200 text-center hover:underline ml-1.5"
        >here</a
      >.
    </p>
  </div>
</template>

<script>
import TurboTrack from "@/components/TurboTrack.vue";
import TurboModal from "@/components/TurboModal.vue";
import versionjson from "@/js/version.json";

export default {
  name: "TurboDesktop",
  components: { TurboTrack, TurboModal },
  data() {
    return {
      version: versionjson["version"],
      flags: {
        showTiers: false,
        isConsole: false,
      },
      modalVisible: false,
      selectedTrack: 1,
      disabledTracks: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
      },
    };
  },
  methods: {
    showModal(id) {
      this.selectedTrack = id;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    disableAll() {
      for (let i = 1; i <= 8; i++) {
        this.disabledTracks[i] = 1;
      }
    },
    enableAll() {
      for (let i = 1; i <= 8; i++) {
        this.disabledTracks[i] = 0;
      }
    },
    toggle(tier) {
      this.disabledTracks[tier] = 1 - (this.disabledTracks[tier] | 0);
    },
    forceMobile() {
      this.$emit("forceMobile");
    },
  },
};
</script>

<style lang="scss" scoped>
.add-row-gap {
  row-gap: 0.25rem;
}
.tier {
  &:hover {
    border: 2px solid #ffffffaa;
  }
}
.tooltip {
  position: relative;
  display: inline-block;

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
    z-index: 20;

    &:hover {
      opacity: 0;
      z-index: 0;
    }
  }

  & .tooltip-text::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: 21px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #6b7280 transparent transparent;
  }
}
.tooltip-text {
  background-color: #00000066;
  visibility: visible;
  position: absolute;
  z-index: 0;
  top: -52px;
  left: 150%;
  width: 380px;
  height: 76px;
  padding-left: 0.5rem;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}
</style>
