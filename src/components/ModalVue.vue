<template>
  <div class="text-center">
    <v-dialog v-model="localDialog" width="auto">
      <v-card>
        <v-card-text>
          {{ selectedDessert }}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="closeDialog">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "ModalVue",
  components: {},
  props: {
    dialog: Boolean,
    selectedDessert: Object,
  },
  data() {
    return {
      localDialog: this.dialog,
    };
  },
  watch: {
    dialog(newValue) {
      this.localDialog = newValue;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    closeDialog() {
      // 부모 컴포넌트에 모달이 닫힌 것을 알립니다.
      this.$emit("closeDialog");
    },
  },
};
</script>
