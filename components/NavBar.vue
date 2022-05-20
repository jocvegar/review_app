<script setup>
import { ref } from "vue";
let open = ref(false);
</script>

<template>
  <div class="w-full max-w-screen bg-slate-100">
    <div
      class="flex flex-col max-w-screen p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
    >
      <div class="flex flex-row items-center justify-between lg:justify-start">
        <NuxtLink
          to="/"
          class="text-lg font-bold tracking-tighter text-teal-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
        >
          Comedero
        </NuxtLink>
        <button
          class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
          @click="open = !open"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
            <path
              v-show="!open"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-show="open"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
              style="display: none"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden flex-col items-center flex-grow pb-4 border-teal-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2"
      >
        <nuxt-link
          class="px-4 py-2 mt-2 text-md text-gray-500 md:mt-0 hover:text-teal-600 focus:outline-none focus:shadow-outline"
          to="/about"
        >
          Acerca
        </nuxt-link>
        <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
          <button
            class="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Agregar
          </button>
        </div>
      </div>
      <Transition>
        <nav
          v-show="open"
          :class="{ flex: open, hidden: !open }"
          class="flex-col items-center flex-grow pb-4 border-teal-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2"
        >
          <nuxt-link
            class="px-4 py-2 mt-2 text-md text-gray-500 md:mt-0 hover:text-teal-600 focus:outline-none focus:shadow-outline"
            to="/about"
            @click="open = !open"
          >
            About
          </nuxt-link>
          <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
            <button
              class="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Agregar
            </button>
          </div>
        </nav>
      </Transition>
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
