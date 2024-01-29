<template>
  <v-col cols="6" sm="3">
    <v-text-field
      v-model="dateRangeText"
      label="Date range"
      prepend-icon="mdi-calendar"
      readonly
    ></v-text-field>
  </v-col>
  <v-row>
    <v-date-picker
      v-model="dates[0]"
      locale="ko-KR"
      mode="date"
      class="datetime-picker"
      is24hr="false"
      weekday-format="getDay"
      month-format="getMonth"

    ></v-date-picker>
    <v-date-picker
      v-model="dates[1]"
      locale="ko-KR"
      no-title
      mode="date"
      class="datetime-picker"
      is24hr="false"
    ></v-date-picker>
  </v-row>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      dates: [new Date(), new Date()], // 두 개의 날짜 선택하도록 수정
    };
  },
  computed: {
    dateRangeText() {
      const startDate = this.dates[0]
        ? dayjs(this.dates[0]).format("YYYY-MM-DD")
        : "";
      const endDate = this.dates[1]
        ? dayjs(this.dates[1]).format("YYYY-MM-DD")
        : "";
      return startDate && endDate ? startDate + " ~ " + endDate : "";
    },
  },
  methods: {
    getDay(date) {
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      let i = new Date(date).getDay(date);
      return daysOfWeek[i];
    },
    getMonth(date) {
      const monthName = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ];

      let i = new Date(date).getMonth(date);
      return monthName[i];
    },
  },
};
</script>
<style></style>
