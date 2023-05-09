<template>
  <div class="max-w-screen-xl mx-auto p-3">
    <router-link
      :to="{ name: 'home' }"
      class="text-gray-900 font-bold mb-5 rounded underline"
    >
      Home page
    </router-link>
    <router-link
      :to="{ name: 'authorList' }"
      class="text-gray-900 font-bold ml-5 mb-5 rounded underline"
    >
      Author list
    </router-link>
    <NavBar />
    <MainContent />
  </div>
</template>

<script setup>
import { NavBar, MainContent } from "../components";
</script>
