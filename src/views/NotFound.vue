<template>
  <section class="max-w-screen-xl mx-auto p-3">
    <div class="text-center">
      <h1 class="text-4xl font-semibold mb-5">404 Not Found</h1>
      <div class="w-full underline underline-offset-4">
        <router-link :to="{ name: 'home' }"> Back to home page </router-link>
      </div>
    </div>
  </section>
</template>
