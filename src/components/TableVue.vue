<template>
  <v-card flat class="tableCard">
    <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="desserts"
      :search="search"
      :items-per-page="10"
    >
      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    headers: Array,
    desserts: Array,
    search: String,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / 10);
    },
  },
};
</script>

<style>


</style>
