<template>
  <v-card flat class="tableCard">
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
      ></v-text-field>
    </template>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :items-per-page="10"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    headers: Array,
    desserts: Array,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
.tableCard {
  margin: 40px;
}
</style>
