<template>
  <div class="daycard">
    <v-card variant="outlined">
      <b-button-group class="mx-1">
        <b-button @click="showCalendar" class="btn-cal" variant="transparent">
          {{ startDate }}
        </b-button>
        <b-button :disabled="true" variant="transparent" class="mx-2"
          >~</b-button
        >
        <b-button @click="showCalendar" class="btn-cal" variant="transparent">
          {{ endDate }}
        </b-button>
      </b-button-group>
    </v-card>
    <CalenderVue v-if="calendarFlag" @hideCalendar="hideCalendar" :range="range" />


    <v-btn variant="tonal" density="compact"> 조회 </v-btn>
  </div>
</template>
<script>
import dayjs from "dayjs";
import CalenderVue from '../components/CalenderVue.vue'
export default {
  name: "SearchWindow",
  layout: "default",
  components: {
    CalenderVue,
  },
  data() {
    return {
      calendarFlag: false,
      range: {
        start: dayjs().format("YYYY-MM-DD"),
        end: dayjs().format("YYYY-MM-DD"),
      },
    };
  },
  computed: {
    startDate() {
      return this.range.start;
    },
    endDate() {
      return this.range.end;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    showCalendar() {
      this.calendarFlag = true;
    },
    hideCalendar() {
      if (this.calendarFlag) this.calendarFlag = false;
    },
  },
};
</script>
<style>
.daycard {
  width: 300px;
  display: flex;
  gap: 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
