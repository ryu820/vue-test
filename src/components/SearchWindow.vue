<template>
  <v-col cols="6" sm="3">
      <v-text-field
        v-model="dateRangeText"
        label="Date range"
        prepend-icon="mdi-calendar"
        readonly
      ></v-text-field>
      {{ dates }}
      <v-date-picker v-model="dates" range></v-date-picker>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      dates: [new Date(), new Date()], // 두 개의 날짜 선택하도록 수정
    };
  },
  computed: {
    dateRangeText() {
      const startDate = this.dates[0]
        ? this.dates[0].toISOString().split("T")[0]
        : "";
      const endDate = this.dates[1]
        ? this.dates[1].toISOString().split("T")[0]
        : "";
      return startDate && endDate ? startDate + " ~ " + endDate : "";
    },
  },
  methods: {},
};
</script>
