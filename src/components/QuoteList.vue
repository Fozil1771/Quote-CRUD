<template>
  <div v-for="quote in filteredQuotes" :key="quote.id">
    <QuoteCard :quote="quote" />
  </div>
</template>

<script>
import QuoteCard from "./QuoteCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    QuoteCard,
  },
  computed: {
    ...mapGetters(["filteredQuotes"]),
  },
  mounted() {
    console.log(this.filteredQuotes);
  },
};
</script>
