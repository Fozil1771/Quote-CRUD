<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg p-4">
    <h3 class="font-bold mb-2">Filter By</h3>

    <div class="mb-4">
      <h4 class="font-bold mb-2">Author</h4>

      <div class="flex flex-col">
        <label
          v-for="(author, index) in authors"
          :key="index"
          class="inline-flex items-center"
        >
          <input
            type="checkbox"
            :value="author"
            v-model="selectedAuthors"
            @change="onAuthorSelect"
            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span class="ml-2 text-gray-700">{{ author }}</span>
        </label>
      </div>
    </div>

    <div>
      <h4 class="font-bold mb-2">Genre</h4>

      <div class="flex flex-col">
        <label
          v-for="(genre, index) in genres"
          :key="index"
          class="inline-flex items-center"
        >
          <input
            type="checkbox"
            :value="genre"
            v-model="selectedGenres"
            @change="onGenreSelect"
            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span class="ml-2 text-gray-700">{{ genre }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // authors: ["Author 1", "Author 2", "Author 3"],
      // genres: ["Genre 1", "Genre 2", "Genre 3"],
      selectedAuthors: [],
      selectedGenres: [],
    };
  },
  computed: {
    authors() {
      let authors = this.$store.state.quotes.map((state) => state.author);
      return [...new Set(authors)].sort();
    },
    genres() {
      let genres = this.$store.state.quotes.map((state) => state.genre);
      return [...new Set(genres)].sort();
    },
  },
  methods: {
    onAuthorSelect(e) {
      if (e.target.checked) this.$store.commit("SET_FILTER_AUTHOR", e.target.value);
      else this.$store.commit("REMOVE_FILTER_AUTHOR", e.target.value);
    },
    onGenreSelect(e) {
      if (e.target.checked) this.$store.commit("SET_FILTER_GENRE", e.target.value);
      else this.$store.commit("REMOVE_FILTER_GENRE", e.target.value);
    },
  },
};
</script>
