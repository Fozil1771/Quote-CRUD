<template>
  <div class="max-w-screen-xl mx-auto p-3">
    <router-link
      :to="{ name: 'quoteList' }"
      class="text-gray-900 font-bold mb-5 rounded underline"
    >
      Back
    </router-link>
    <div class="mt-5 max-w-md">
      <h2 class="text-2xl font-medium mb-4">{{ quote.title }}</h2>
      <p class="text-gray-600 mb-8">{{ quote.genre }} by {{ quote.author }}</p>
    </div>
    <div class="flex w-2/4 gap-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="showQuoteForm"
      >
        Update
      </button>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        @click="deleteQuote"
      >
        Delete
      </button>
    </div>
    <QuoteForm
      v-if="showForm"
      :showForm="showForm"
      @formState="showQuoteForm"
      :formType="formType"
      :formData="quote"
    />
  </div>
</template>

<script>
import QuoteForm from "./QuoteForm.vue";

export default {
  name: "QuoteDetails",
  components: {
    QuoteForm,
  },
  data() {
    return {
      showForm: false,
      formType: "update",
    };
  },
  computed: {
    quote() {
      return this.$store.state.quotes.find(
        (quote) => quote.id === parseInt(this.$route.params.id)
      );
    },
  },
  methods: {
    showQuoteForm() {
      this.showForm = !this.showForm;
    },
    deleteQuote() {
      let confirmDelete = confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        this.$store.dispatch("removeQuote", this.quote.id);
        this.$router.push("/quotes");
      }
    },
  },
};
</script>
