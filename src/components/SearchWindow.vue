<template v-slot:text>
  <div>
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
          <v-btn
            class="calendarInput"
            prepend-icon="mdi-calendar"
            variant="outlined"
            size="x-large"
            v-bind="props"
          >
            {{ dateRangeText }}
          </v-btn>
          <v-btn variant="tonal" size="x-large"> 조회 </v-btn>
      </template>
      <v-card>
        <v-row>
          <v-locale-provider locale="KR">
            <v-date-picker
              v-model="dates[0]"
              mode="date"
              hide-header
              class="datetime-picker"
              reactive
            ></v-date-picker>
            <v-date-picker
              v-model="dates[1]"
              hide-header
              mode="date"
              class="datetime-picker"
              reactive
            ></v-date-picker>
          </v-locale-provider>
        </v-row>
      </v-card>
    </v-menu>
    

    <v-text-field
      @input="inputEvent"
      v-model="search"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      class="input1"
    ></v-text-field>
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  name: "SearchBarComp",
  data() {
    return {
      search: "",
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
    inputEvent(event) {
      const inputValue = event.target.value;
      this.$emit("sendSearchData", inputValue);
    },
    showCalendar() {
      if (this.calendarFlag) {
        this.calendarFlag = false;
      } else {
        this.calendarFlag = true;
      }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
  },
};
</script>
<style>
.input1 {
  width: 500px;
  float: right;
  margin-right: 7%;
}
.calendarInput {
  width: 500px;
  float: left;
  margin-left: 7%;
  margin-right: 15px;
}
</style>
