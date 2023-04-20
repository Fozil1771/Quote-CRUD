<template>
  <div>
    <h2>{{ quote.title }}</h2>
    <p>{{ quote.content }}</p>
    <p>Author: {{ quote.author }}</p>
    <p>Genre: {{ quote.genre }}</p>
  </div>
</template>

<script>
export default {
  name: "QuoteView",
  computed: {
    quote() {
      // Get the quote from the store based on the ID parameter
      return this.$store.state.quotes.find(
        (quote) => quote.id === parseInt(this.$route.params.id)
      );
    },
  },
};
</script>
