<template>
    <div>
      <v-date-picker
        v-click-outside="onClickOutside"
        :v-model="range"
        locale="ko"
        is-range
        mode="date"
        class="datetime-picker"
        is24hr

        @click:date="handleDateClick"
      >
      </v-date-picker>
    </div>
  </template>
  <script>
  export default {
    name: 'CalendarVue',
    data() {
      return {}
    },
    props: {
      range: {
        type: Object,
        default() {
          return {}
        },
      },
    },
    methods: {
    onClickOutside() {
      this.$emit('hideCalendar')
    },
    handleDateClick(date) {
      // 날짜가 클릭되었을 때 호출되는 함수
      // 선택된 날짜를 부모 컴포넌트로 전달
      console.log(date)
      this.$emit('dateSelected', date);
    },
  },
  }
  </script>
  
  <style>
  .datetime-picker {
    position: absolute;
    left: 430px;
    top: 120px;
    z-index: 5;
  }
  </style>