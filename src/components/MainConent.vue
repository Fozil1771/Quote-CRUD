<template>
  <SortOptions />
  <section class="flex items-start gap-4">
    <div class="basis-1/5">
      <FilterOptions />
    </div>
    <div
      class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 grid-cols-1"
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
