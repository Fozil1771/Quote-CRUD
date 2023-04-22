<template>
  <div class="flex flex-col items-end">
    <div class="mb-4">
      <select
        class="px-4 py-2rounded-md border rounded py-2 focus:outline-none cursor-pointer"
        id="sortSelect"
        @change="onSortChange"
        v-model="sortOption"
      >
        <option selected disabled>Sort By:</option>
        <option value="newToOld">Newest to Oldest</option>
        <option value="oldToNew">Oldest to Newest</option>
        <option value="recentlyUpdated">Recently Updated</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortOptions",
  data() {
    return {
      sortOption: "newToOld",
    };
  },
  methods: {
    onSortChange() {
      this.$store.commit("SET_SORT_OPTION", this.sortOption);
    },
  },
};
</script>
