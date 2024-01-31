<template>
  <v-col cols="6" sm="3">
    <v-text-field
      @click="showCalendar"
      v-model="dateRangeText"
      label="Date range"
      prepend-icon="mdi-calendar"
      readonly
    ></v-text-field>
  </v-col>
  <v-row v-if="calendarFlag" >
    <v-locale-provider locale="KR">
      <v-date-picker
        v-model="dates[0]"
        locale="ko-KR"
        mode="date"
        hide-header
        class="datetime-picker"
        reactive
      ></v-date-picker>
      <v-date-picker
        v-model="dates[1]"
        locale="ko-KR"
        hide-header
        mode="date"
        class="datetime-picker"
        reactive
      ></v-date-picker>
    </v-locale-provider>
  </v-row>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      calendarFlag: false,
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
    showCalendar() {
      if (this.calendarFlag) {
        this.calendarFlag = false;
      } else {
        this.calendarFlag = true;
      }
      
    },
  },
};
</script>
<style></style>
