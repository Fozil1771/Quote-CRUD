<template>
  <div class="container mx-auto p-6">
    <div class="text-center">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
      >
        Quote Generator App
      </h1>
      <p
        class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Get a random quote or view all quotes where you can create update and delete
      </p>
      <div class="flex gap-5 justify-center">
        <button
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700"
          @click="onClickRandomQuote"
        >
          Random a quote
        </button>
        <router-link
          :to="{ name: 'quoteList' }"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          All Quotes
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </router-link>
      </div>

      <div class="mt-6" v-if="showQuote">
        <RandomQuote :randomQuote="this.randomQuote" />
      </div>
    </div>
  </div>
</template>

<script>
import RandomQuote from "../components/RandomQuote.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomePage",
  components: {
    RandomQuote,
  },
  data() {
    return {
      randomQuote: {},
      showQuote: false,
    };
  },
  setup() {
    const store = useStore();

    const quotes = computed(() => store.state.quotes);

    onMounted(() => {
      store.dispatch("getQuotesList");
    });

    const showedQuotes = [];

    const getRandomQuote = () => {
      const maxIndex = quotes.value.length - 1;
      const randomIndex = Math.floor(Math.random() * maxIndex);

      let q = quotes.value[randomIndex];
      if (!showedQuotes.includes(q.id)) {
        showedQuotes.push(q.id);
        return q;
      }
      return q;
    };

    return {
      quotes,
      getRandomQuote,
      showedQuotes,
    };
  },
  methods: {
    onClickRandomQuote() {
      this.showQuote = true;
      try {
        this.randomQuote = this.getRandomQuote();
        console.log(this.showedQuotes);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
