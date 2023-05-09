<template>
  <div
    class="fixed z-10 top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white rounded shadow-md p-6 w-full max-w-md">
      <div class="flex justify-between relative">
        <h2 class="text-lg font-bold mb-4">
          {{ formType === "create" ? "Create" : "Update" }} a quote
        </h2>
        <button class="absolute top-0 right-0 border-none bg-inherit" @click="closeForm">
          x
        </button>
      </div>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="title"> Title </label>
          <input
            class="border rounded py-2 px-3 text-gray-700 w-full"
            type="text"
            name="title"
            id="title"
            v-model="quote.title"
            @focus="removeError('title')"
          />
          <span v-if="errors.title" class="text-red-500 text-sm">{{ errors.title }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="author"> Author </label>
          <input
            class="border rounded py-2 px-3 text-gray-700 w-full"
            type="text"
            name="author"
            id="author"
            v-model="quote.author"
            @focus="removeError('author')"
          />
          <span v-if="errors.author" class="text-red-500 text-sm">{{
            errors.author
          }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="genre"> Genre </label>
          <input
            class="border rounded py-2 px-3 text-gray-700 w-full"
            type="text"
            name="genre"
            id="genre"
            v-model="quote.genre"
            @focus="removeError('genre')"
          />
          <span v-if="errors.genre" class="text-red-500 text-sm">{{ errors.genre }}</span>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click.prevent="formType === 'create' ? onFormCreate() : onFormUpdate()"
        >
          {{ formType === "create" ? "Create" : "Update" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showForm: {
      type: Boolean,
      required: true,
    },
    formType: {
      type: String,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quote: {
        title: "",
        author: "",
        genre: "",

        created_at: "",
        updated_at: "",
      },
      status: null,
      error: null,
      errors: {},
    };
  },
  mounted() {
    if (this.formType === "update") {
      this.quote = { ...this.formData };
    }
  },
  methods: {
    isInputValid() {
      let t = /^[a-zA-Z\s]/;
      if (this.quote.title != "" && !t.test(this.quote.title))
        this.errors.title = "Title is invalid or empty";

      if (this.quote.author != "" && !t.test(this.quote.author))
        this.errors.author = "Author is invalid or empty";

      if (this.quote.genre != "" && !t.test(this.quote.genre))
        this.errors.genre = "Genre is invalid or empty";
    },

    getCurrentTime() {
      const now = new Date();
      return now.toISOString();
    },
    closeForm() {
      this.$emit("formState");
    },
    onFormCreate() {
      this.quote.created_at = this.getCurrentTime();
      this.quote.updated_at = this.getCurrentTime();

      this.isInputValid();

      if (Object.keys(this.errors).length === 0) {
        this.$store.dispatch("addQuote", this.quote);
        this.$emit("formState");
      }
    },

    onFormUpdate() {
      this.quote.updated_at = this.getCurrentTime();

      this.isInputValid();

      if (Object.keys(this.errors).length === 0) {
        this.$store.dispatch("updateQuote", this.quote);
        this.$emit("formState");
      }
    },
    removeError(field) {
      delete this.errors[field];
    },
  },
  watch: {
    title(value) {
      if (value.length) {
        this.removeError("title");
      }
    },
    author(value) {
      if (value.length) {
        this.removeError("author");
      }
    },
    genre(value) {
      if (value.length) {
        this.removeError("genre");
      }
    },
  },
};
</script>
