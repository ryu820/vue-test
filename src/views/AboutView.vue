<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>존나 어렵다</h1>
    <TableVue />
  </div>
</template>
<script>
import TableVue from '@/components/TableVue.vue';

export default ({
  name: "AboutView",

  components: {
    TableVue,
  },
});
</script>


