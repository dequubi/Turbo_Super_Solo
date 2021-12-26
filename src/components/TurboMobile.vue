<template>
  <div class="bg-black flex flex-col h-screen">
    <transition name="modal-fade">
      <turbo-modal
        v-if="modalVisible"
        @close-modal="modalVisible = false"
        :trackId="selectedTrack"
      />
    </transition>
    <vue-scroll-snap class="environments" :horizontal="true">
      <div
        class="item series text-white flex flex-col items-center text-2xl font-front justify-between"
      >
        <img src="../assets/turbo-logo.png" alt="Turbo logo" class="mt-8" />
        <div id="swipe-prompt" class="flex border-gray-800 pb-3 pt-3">
          <p class="">Swipe to see tracks</p>
          <div id="breathing-arrow" class="ml-3 mt-0.5">&#10148;</div>
        </div>
        <div class="info flex flex-col items-center">
          <p id="author">
            made by
            <a
              href="https://github.com/ShaidenUNI"
              class="font-author italic text-3xl underline"
              >dequubi</a
            >
          </p>
          <p id="ver" class="text-sm">v3.0.0</p>
        </div>
      </div>
      <div class="item canyon">
        <div
          class="im-canyon text-black flex justify-center bg-yellow-400 font-bold border-b-2 border-t-2 border-red-100"
        >
          Canyon
        </div>
        <div class="tracks tracks-white">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="s-white"
            :id="n"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n + 40"
            class="s-green"
            :id="n + 40"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n + 80"
            class="s-blue"
            :id="n + 80"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n + 120"
            class="s-red"
            :id="n + 120"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n + 160"
            class="s-black"
            :id="n + 160"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
      </div>
      <div class="item valley">
        <div
          class="im-canyon text-black flex justify-center bg-green-400 font-bold border-b-2 border-t-2 border-green-200"
        >
          Valley
        </div>
        <div class="tracks tracks-white">
          <turbo-track
            v-for="n in 10"
            :key="n + 10"
            class="s-white"
            :id="n + 10"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n + 50"
            class="s-green"
            :id="n + 50"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n + 90"
            class="s-blue"
            :id="n + 90"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n + 130"
            class="s-red"
            :id="n + 130"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n + 170"
            class="s-black"
            :id="n + 170"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
      </div>
      <div class="item lagoon">
        <div
          class="im-canyon text-black flex justify-center bg-blue-400 font-bold border-b-2 border-t-2 border-blue-200"
        >
          Lagoon
        </div>
        <div class="tracks tracks-white">
          <turbo-track
            v-for="n in 10"
            :key="n + 20"
            class="s-white"
            :id="n + 20"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n + 60"
            class="s-green"
            :id="n + 60"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n + 100"
            class="s-blue"
            :id="n + 100"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n + 140"
            class="s-red"
            :id="n + 140"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n + 180"
            class="s-black"
            :id="n + 180"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
      </div>
      <div class="item stadium">
        <div
          class="im-canyon text-black flex justify-center bg-purple-400 font-bold border-b-2 border-t-2 border-purple-200"
        >
          Stadium
        </div>
        <div class="tracks tracks-white">
          <turbo-track
            v-for="n in 10"
            :key="n + 30"
            class="s-white"
            :id="n + 30"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n + 70"
            class="s-green"
            :id="n + 70"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n + 110"
            class="s-blue"
            :id="n + 110"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n + 150"
            class="s-red"
            :id="n + 150"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
        <div class="tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n + 190"
            class="s-black"
            :id="n + 190"
            @modal-request="showModal"
            :showTiers="showTiers"
            :disabledTracks="disabledTracks"
          />
        </div>
      </div>
    </vue-scroll-snap>
    <footer class="text-white pt-0.5 border-t-2 border-gray-800 relative">
      <transition name="fade">
        <div
          class="p-2 border-2 rounded-md border-black bg-gray-900 absolute -top-24 w-full"
          v-show="showFilter"
        >
          <div id="tiers" class="flex justify-between gap-1 text-black h-12">
            <div
              v-for="n in 8"
              :key="n"
              class="w-full grid place-content-center rounded-sm"
              :class="[{ disabled: disabledTracks[n] === 1 }, 't' + n]"
              @click="toggle(n)"
            >
              {{ n }}
            </div>
          </div>
          <div class="buttons grid grid-cols-2 gap-1 mt-1">
            <button
              class="bg-gray-500 text-white rounded-sm"
              @click="disableAll"
            >
              Disable all
            </button>
            <button
              class="bg-gray-500 text-white rounded-sm"
              @click="enableAll"
            >
              Enable all
            </button>
          </div>
        </div>
      </transition>
      <div id="buttons" class="grid grid-cols-2 z-10">
        <button
          class="bg-gray-500 text-gray-200 rounded-sm m-0.5 p-1 pl-2 pr-2"
          @click="toggleTiers"
        >
          Toggle STM tiers
        </button>
        <button
          class="bg-gray-500 text-gray-200 rounded-sm m-0.5 p-1 pl-2 pr-2"
          @click="toggleFilter"
        >
          Filter by tier <i class="arrow up"></i>
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import TurboTrack from "@/components/TurboTrack.vue";
import TurboModal from "@/components/TurboModal.vue";

export default {
  components: { VueScrollSnap, TurboTrack, TurboModal },
  name: "TurboMobile",
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
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
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
    disable(tier) {
      this.toggle(tier);
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
  },
};
</script>

<style scoped>
.environments {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.environments::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.item {
  min-width: 100vw;
  min-height: 85vh;
}

.arrow {
  border: solid rgba(229, 231, 235);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-bottom: -2px;
  margin-left: 5px;
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.fade-enter-active {
  animation: slide 0.5s forwards;
  transition: opacity 0.25s ease;
}

.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slide {
  0% {
    top: -2rem;
  }
  100% {
    top: -6rem;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

#breathing-arrow {
  -webkit-animation: breathing 3s ease-out infinite normal;
  animation: breathing 3s ease-out infinite normal;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

@-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>
