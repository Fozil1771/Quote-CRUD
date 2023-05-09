<template>
  <div class="max-w-screen-xl mx-auto p-3">
    <router-link
      :to="{ name: 'home' }"
      class="text-gray-900 font-bold mb-5 rounded underline"
    >
      Home page
    </router-link>

    <div class="table-container mt-5">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Author Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(author, index) in authors" :key="author.id">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{ author }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["filteredQuotes"]),
    authors() {
      return this.filteredQuotes.map((quote) => quote.author);
    },
  },
  mounted() {
    this.authors;
  },
};
</script>
