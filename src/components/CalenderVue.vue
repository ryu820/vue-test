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
        :max-date="new Date()"
        :columns="
          $screens({
            default: 1,
          })
        "
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