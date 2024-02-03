<template>
  <div class="main">
    <h1>여기는 전체 조회다</h1>
    <SearchBarComp :search="search" @sendSearchData="sendSearchData"></SearchBarComp>
    <TableComp
      class="tablecomp"
      :headers="customHeaders"
      :desserts="customDesserts"
      :search="search"
    ></TableComp>
  </div>
</template>
<script>
import TableComp from "../components/TableVue.vue"
import SearchBarComp from "@/components/SearchWindow.vue";

export default {
  name: "HomeVue",

  components: {
    TableComp,
    SearchBarComp,
  },
  data() {
    return {
      search:'',
      customHeaders: [
        { align: "start", key: "no", sortable: false, title: "num" },
        { key: "txid", title: "id" },
        { key: "producer", title: "하이" },
        { key: "production", title: "옵션" },
        { key: "type", title: "옵션2" },
        { key: "timestamp", title: "옵션3" },
      ],
      customDesserts: [
        {
          no: 1,
          txid: 159,
          producer: "하이",
          production: 24,
          type: 4.0,
          timestamp: 1,
        },
        {
          no: 2,
          txid: 159,
          producer: "나는",
          production: 24,
          type: 4.0,
          timestamp: 1,
        },
        {
          no: 3,
          txid: 159,
          producer: "똥멍청이",
          production: 24,
          type: 4.0,
          timestamp: 1,
        },
        {
          no: 4,
          txid: 159,
          producer: "이게뭐람",
          production: 24,
          type: 4.0,
          timestamp: 1,
        },
        {
          no: 5,
          txid: 159,
          producer: 6.0,
          production: 24,
          type: 4.0,
          timestamp: 1,
        },
        
      
      ],
    };
  },
  methods: {
    sendSearchData(data){
      this.search=data;
    }
  }

};
</script>
<style>
.main > h1 {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tablecomp {
  margin: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
