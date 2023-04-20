<template>
  <div v-for="quote in quotes" :key="quote.id">
    <QuoteCard :quote="quote" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import QuoteCard from "./QuoteCard.vue";

export default {
  components: {
    QuoteCard,
  },
  setup() {
    const store = useStore();

    const quotes = computed(() => store.state.quotes);

    onMounted(() => {
      store.dispatch("getQuotesList");
    });

    return {
      quotes,
    };
  },
};
</script>
