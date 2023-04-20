<template>
  <div
    class="block max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative"
  >
    <p class="font-normal text-gray-500">
      {{ quote.title }}
    </p>
    <div class="flex items-center gap-2 mt-2 justify-end">
      <p class="font-medium text-gray-700">Genre:</p>
      <p class="font-medium text-gray-700">{{ quote.genre }}</p>
    </div>
    <div class="flex items-center gap-2 mt-2 justify-end">
      <p class="font-medium text-gray-700">Author:</p>
      <p class="font-medium text-gray-700">{{ quote.author }}</p>
    </div>

    <div class="w-full mt-5 text-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteCard",
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
};
</script>
