<template>
  <div class="bg-black flex flex-col h-screen">
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
          class="el im-canyon text-black flex justify-center bg-yellow-400 font-bold border-b-2 border-t-2 border-red-100"
        >
          Canyon
        </div>
        <div class="el tracks tracks-white">
          <turbo-track v-for="n in 10" :key="n" class="bg-gray-300" :id="n" />
        </div>
        <div class="el tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-green-300"
            :id="n + 40"
          />
        </div>
        <div class="el tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-blue-300"
            :id="n + 80"
          />
        </div>
        <div class="el tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-red-300"
            :id="n + 120"
          />
        </div>
        <div class="el tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-gray-700 text-white"
            :id="n + 160"
          />
        </div>
      </div>
      <div class="item valley">
        <div
          class="el im-canyon text-black flex justify-center bg-green-400 font-bold border-b-2 border-t-2 border-green-200"
        >
          Valley
        </div>
        <div class="el tracks tracks-white">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-gray-300"
            :id="n + 10"
          />
        </div>
        <div class="el tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-green-300"
            :id="n + 50"
          />
        </div>
        <div class="el tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-blue-300"
            :id="n + 90"
          />
        </div>
        <div class="el tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-red-300"
            :id="n + 130"
          />
        </div>
        <div class="el tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-gray-700 text-white"
            :id="n + 170"
          />
        </div>
      </div>
      <div class="item lagoon">
        <div
          class="el im-canyon text-black flex justify-center bg-blue-400 font-bold border-b-2 border-t-2 border-blue-200"
        >
          Lagoon
        </div>
        <div class="el tracks tracks-white">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-gray-300"
            :id="n + 20"
          />
        </div>
        <div class="el tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-green-300"
            :id="n + 60"
          />
        </div>
        <div class="el tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-blue-300"
            :id="n + 100"
          />
        </div>
        <div class="el tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-red-300"
            :id="n + 140"
          />
        </div>
        <div class="el tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-gray-700 text-white"
            :id="n + 180"
          />
        </div>
      </div>
      <div class="item stadium">
        <div
          class="el im-canyon text-black flex justify-center bg-purple-400 font-bold border-b-2 border-t-2 border-purple-200"
        >
          Stadium
        </div>
        <div class="el tracks tracks-white">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-gray-300"
            :id="n + 30"
          />
        </div>
        <div class="el tracks tracks-green">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-green-300"
            :id="n + 70"
          />
        </div>
        <div class="el tracks tracks-blue">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-blue-300"
            :id="n + 110"
          />
        </div>
        <div class="el tracks tracks-red">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-red-300"
            :id="n + 150"
          />
        </div>
        <div class="el tracks tracks-black">
          <turbo-track
            v-for="n in 10"
            :key="n"
            class="bg-gray-700 text-white"
            :id="n + 190"
          />
        </div>
      </div>
    </vue-scroll-snap>
    <footer class="text-white pt-0.5 border-t-2 border-gray-800 relative">
      <transition name="fade">
        <div
          class="border-2 bg-blue-400 absolute -top-8 w-full"
          v-show="showFilter"
        >
          Filter content!
        </div>
      </transition>
      <div id="buttons" class="flex justify-between z-10">
        <button class="bg-gray-900 text-gray-200 m-0.5 p-1 pl-2 pr-2">
          Toggle STM tiers
        </button>
        <button
          class="bg-gray-900 text-gray-200 m-0.5 p-1 pl-2 pr-2"
          @click="toggleFilter"
        >
          Filter STM tiers <i class="arrow up"></i>
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import TurboTrack from "./TurboTrack.vue";

export default {
  components: { VueScrollSnap, TurboTrack },
  name: "TurboMobile",
  data() {
    return {
      showFilter: false,
    };
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter;
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
    top: 0;
  }
  100% {
    top: -2rem;
  }
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
