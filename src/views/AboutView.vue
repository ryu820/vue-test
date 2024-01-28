<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>존나 어렵다</h1>
    <TableVue :headers="customHeaders" :desserts="customDesserts"></TableVue>
  </div>
</template>
<script>
import TableVue from '@/components/TableVue.vue';

export default ({
  name: "AboutView",

  components: {
    TableVue,
  },
  data() {
    return {
      customHeaders: [
        { align: "start", key: "name", sortable: false, title: "테스트해보자" },
        { key: "id", title: "Custom id" },
        { key: "option1", title: "Custom option1" },
        { key: "option2", title: "Custom option2" },
        { key: "option3", title: "Custom option3" },
        { key: "option4", title: "Custom option4" },
      ],
      customDesserts: [
      {
          name: "Frozen Yogurt1111",
          id: 159,
          option1: 6.0,
          option2: 24,
          option3: 4.0,
          option4: 1,
        },
        {
          name: "Ice cream sandwich1111",
          id: 237,
          option1: 9.0,
          option2: 37,
          option3: 4.3,
          option4: 1,
        },
        {
          name: "Eclair1111",
          id: 262,
          option1: 16.0,
          option2: 23,
          option3: 6.0,
          option4: 7,
        },
        {
          name: "Cupcake11111",
          id: 305,
          option1: 3.7,
          option2: 67,
          option3: 4.3,
          option4: 8,
        },
      ]
    }
  }
});
</script>


