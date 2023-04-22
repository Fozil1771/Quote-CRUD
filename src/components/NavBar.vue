<template>
  <nav class="flex items-center justify-between flex-wrap mt-5 pb-5">
    <div class="w-full flex-grow flex sm:items-center sm:w-auto">
      <div class="text-sm flex-grow">
        <div class="flex items-center">
          <input
            class="border-2 border-gray-500 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Search"
            v-model="searchInput"
            @input="searchQuote"
          />
        </div>
      </div>
      <div>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          @click="showQuoteForm"
          :showForm="showForm"
          @showQuoteForm="showQuoteForm"
        >
          Create
        </button>
      </div>
    </div>
  </nav>
  <QuoteForm
    v-if="showForm"
    :showForm="showForm"
    @formState="showQuoteForm"
    :formType="formType"
  />
</template>

<script>
import QuoteForm from "./QuoteForm.vue";

export default {
  name: "NavBar",
  components: {
    QuoteForm,
  },
  data() {
    return {
      showForm: false,
      formType: "create",
      searchInput: "",
    };
  },
  methods: {
    showQuoteForm() {
      this.showForm = !this.showForm;
      console.log(this.showForm);
    },
    searchQuote() {
      this.$store.commit("SET_SEARCH", this.searchInput);
    },
  },
};
</script>
