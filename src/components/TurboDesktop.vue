<template>
  <div class="bg-black flex flex-col h-screen">
    <transition name="modal-fade">
      <turbo-modal
        v-if="modalVisible"
        @close-modal="modalVisible = false"
        :trackId="selectedTrack"
        :platform="'desktop'"
      />
    </transition>
    <div class="flex justify-center mt-2">
      <div class="grid grid-cols-5 w-full max-w-7xl gap-1">
        <img src="@/assets/solo.jpg" alt="Canyon" />
        <img src="@/assets/canyon.jpg" alt="Canyon" />
        <img src="@/assets/valley.jpg" alt="Valley" />
        <img src="@/assets/lagoon.jpg" alt="Lagoon" />
        <img src="@/assets/stadium.jpg" alt="Stadium" />
        <img src="@/assets/series-white.jpg" alt="White series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': showTiers }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 0"
            class="s-white"
            :id="m + (n - 1) * 10 + 0"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-green.jpg" alt="Green series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': showTiers }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 40"
            class="s-green"
            :id="m + (n - 1) * 10 + 40"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-blue.jpg" alt="Blue series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': showTiers }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 80"
            class="s-blue"
            :id="m + (n - 1) * 10 + 80"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-red.jpg" alt="Red series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': showTiers }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 120"
            class="s-red"
            :id="m + (n - 1) * 10 + 120"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <img src="@/assets/series-black.jpg" alt="Black series" />
        <div
          class="tracks gap-0.5 h-full"
          v-for="n in 4"
          :key="n"
          :class="{ 'add-row-gap': showTiers }"
        >
          <turbo-track
            v-for="m in 10"
            :key="m + (n - 1) * 10 + 160"
            class="s-black"
            :id="m + (n - 1) * 10 + 160"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
      </div>
    </div>
    <div class="mt-2 border-t-2 border-gray-900"></div>
    <div class="footer flex self-center max-w-7xl gap-20 w-full mt-2">
      <div class="buttons flex justify-between w-full">
        <button
          class="bg-gray-500 text-white rounded-sm p-1 pl-2 pr-2 w-64 h-12 hover:bg-gray-400 active:bg-gray-500 select-none"
          @click="toggleTiers"
        >
          Toggle STM tiers
        </button>
        <div id="tier-toggles">
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
        <p id="ver" class="text-sm">v3.0.1</p>
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
  </div>
</template>

<script>
import TurboTrack from "@/components/TurboTrack.vue";
import TurboModal from "@/components/TurboModal.vue";

export default {
  name: "TurboDesktop",
  components: { TurboTrack, TurboModal },
  data() {
    return {
      showFilter: false,
      showTiers: false,
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
    toggleTiers() {
      this.showTiers = !this.showTiers;
    },
    showModal(id) {
      this.selectedTrack = id;
      this.modalVisible = true;
      this.showFilter = false;
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
.logo {
  background-image: url("../assets/solo.jpg");
}
.canyon {
  background-image: url("../assets/canyon.jpg");
}
.lagoon {
  background-image: url("../assets/lagoon.jpg");
}
.valley {
  background-image: url("../assets/valley.jpg");
}
.stadium {
  background-image: url("../assets/stadium.jpg");
}
.add-row-gap {
  row-gap: 0.25rem;
}
.tier {
  &:hover {
    border: 2px solid #ffffffaa;
  }
}
</style>
