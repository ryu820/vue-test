<template>
  <h1>여기는 전체조회다</h1>
  <SearchWindow/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import SearchWindow from '@/components/SearchWindow.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    SearchWindow
  },
});
</script>
