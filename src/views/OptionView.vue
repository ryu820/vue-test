<template>
  <div class="option">
    <h1>여기는 모르겠다</h1>
    <v-row align-items="center" justify="center">
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
        class="input"
      ></v-text-field>
      <v-btn variant="outlined" size="x-large" class="button1"> 신청하기 </v-btn>
    </v-row>

    <TableComp
      class="tablecomp1"
      :headers="customHeaders"
      :desserts="customDesserts"
      :search="search"
    ></TableComp>
  </div>
</template>
<script>
import TableComp from "../components/TableVue.vue";

export default {
  name: "OptionView",
  components: {
    TableComp,
  },
  data() {
    return {
      search: "",
      customHeaders: [
        { align: "start", key: "no", sortable: false, title: "num" },
        { key: "txid", title: "id" },
        { key: "producer", title: "하이" },
        { key: "production", title: "옵션" },
        { key: "type", title: "옵션2" },
        { key: "actions", title: "옵션3" },
      ],
      customDesserts: [
        {
          no: 1,
          txid: 159,
          producer: "하이",
          production: 24,
          type: 4.0,
        },
        {
          no: 2,
          txid: 159,
          producer: "나는",
          production: 24,
          type: 4.0,
        },
        {
          no: 3,
          txid: 159,
          producer: "똥멍청이",
          production: 24,
          type: 4.0,
        },
        {
          no: 4,
          txid: 159,
          producer: "이게뭐람",
          production: 24,
          type: 4.0,
        },
        {
          no: 5,
          txid: 159,
          producer: 6.0,
          production: 24,
          type: 4.0,
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style>
.option > h1 {
  margin-top: 5%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tablecomp1 {
  margin: 5% 7% 5% 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input {
  width: 500px;
  float: left;
  margin-left: 7%;
  margin-right: 700px;
}
.button1 {
    width: 300px;
  float: right;
  margin-right: 7%;
}
.asd {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
