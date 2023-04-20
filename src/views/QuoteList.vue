<template>
  <div class="container mx-auto p-6">
    <router-link
      :to="{ name: 'home' }"
      class="text-gray-900 font-bold mb-5 rounded underline"
    >
      Home page
    </router-link>
    <NavBar />
    <MainContent />
  </div>
</template>

<script setup>
import { NavBar, MainContent } from "../components";
</script>
