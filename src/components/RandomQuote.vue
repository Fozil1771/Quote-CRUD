<template>
  <div
    v-if="randomQuote.title"
    class="block max-w-sm mx-auto p-6 bg-gray-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative"
  >
    <p class="font-normal text-gray-500">{{ randomQuote.title }}</p>
    <div class="flex items-center gap-2 mt-2 justify-end">
      <p class="font-medium text-gray-700">Genre:</p>
      <p class="font-medium text-gray-700">{{ randomQuote.genre }}</p>
    </div>
    <div class="flex items-center gap-2 mt-2 justify-end">
      <p class="font-medium text-gray-700">Author:</p>
      <p class="font-medium text-gray-700">{{ randomQuote.author }}</p>
    </div>
  </div>
  <div v-else>
    <p>No quotes yet, let's create one!</p>
  </div>
</template>

<script>
export default {
  props: {
    randomQuote: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.randomQuote;
  },
};
</script>
