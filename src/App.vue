<template>
  <v-app>
    <v-tabs fixed-tabs  >
      <v-tab to="/"> Option </v-tab>
      <v-tab to="/about"> Another Option </v-tab>
      <v-tab> Another Option1 </v-tab>
      <v-tab> Another Option2 </v-tab>
      <v-tab> Another Option3 </v-tab>
    </v-tabs>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
