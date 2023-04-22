<template>
  <section class="">
    <div class="flex justify-between items-center">
      <FilterOptions />
      <SortOptions />
    </div>
    <div
      class="grid w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1"
    >
      <QuoteList />
    </div>
  </section>
</template>

<script setup>
import QuoteList from "./QuoteList.vue";
import SortOptions from "./SortOptions.vue";
import FilterOptions from "./FilterOptions.vue";
</script>
