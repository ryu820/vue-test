<template>
  <v-card flat class="tableCard">
    <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="desserts"
      :search="search"
      :items-per-page="10"
      @click:row="openModal"
    >
      <template v-slot:[getitemcontrols()]="{ item }">
        <v-btn @click="showDetails(item)" color="primary">상세보기</v-btn>
      </template>
      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </template>
    </v-data-table>
    <ModalVue
      :dialog="dialog"
      :selectedDessert="selectedDessert"
      @closeDialog="closeDialog"
    />
  </v-card>
</template>

<script>
import ModalVue from "./ModalVue.vue";

export default {
  components: {
    ModalVue,
  },
  props: {
    headers: Array,
    desserts: Array,
    search: String,
  },
  data() {
    return {
      page: 1,
      dialog: false,
      selectedDessert: null,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / 10);
    },
  },
  methods: {
    getitemcontrols() {
      return `item.actions`;
    },
    openModal(index, item) {
      this.selectedDessert = item;
      this.dialog = true;
    },
    closeDialog() {
      this.selectedDessert = null;
      this.dialog = false;
    },
    showDetails(item) {
      console.log("Details for:", item);
      // 원하는 작업 수행
    },
  },
};
</script>
