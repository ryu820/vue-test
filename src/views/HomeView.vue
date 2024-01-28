<template>
  <h1>여기는 전체조회다</h1>
  <SearchWindow />
</template>

<script>

// Components
import SearchWindow from "@/components/SearchWindow.vue";

export default ({
  name: "HomeView",

  components: {
    SearchWindow,
  },
});
</script>
<style>
.main {
  margin: 50px auto;
  background-color: rgb(18, 220, 62);
  width: 300px;
  display: flex;
  gap: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
