<template>
  <h3 class="font-bold mb-2 cursor-default" @click="showFilters">Filter By</h3>
  <div class="filter-section__overlay" :class="{ active: isFilter }"></div>
  <div
    class="relative filter-section bg-white shadow overflow-hidden sm:rounded-lg p-4"
    :class="{ active: isFilter }"
  >
    <button
      class="close-btn absolute top-4 right-4 text-lg border-none bg-inherit"
      @click="showFilters"
    >
      x
    </button>
    <h3 class="font-bold mb-2">Filter By</h3>

    <div class="mb-4">
      <h4 class="font-bold mb-2">Author</h4>

      <div class="flex flex-col">
        <label
          v-for="(author, index) in authors"
          :key="index"
          class="inline-flex items-center cursor-pointer"
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
      isFilter: false,
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
    showFilters() {
      this.isFilter = !this.isFilter;
    },
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

<style>
/* Style the container element */

.filter-section {
  position: fixed !important;
  width: 30%;

  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 100;
  display: none;
}

.filter-section__overlay {
  position: fixed !important;
  width: 100%;

  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 10;
  display: none;
}

.filter-section.active,
.filter-section__overlay.active {
  display: block;
}

@media screen and (max-width: 768px) {
  .filter-section {
    max-width: 320px;
    width: 100%;
  }
}
</style>
