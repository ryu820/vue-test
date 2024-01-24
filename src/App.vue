<template>
  <v-app>
    <v-tabs fixed-tabs >
      <div class="nav">
        <v-img :width="100" aspect-ratio="1/1" src="./assets/logo.png"></v-img>
        <v-tab to="/"> Option </v-tab>
        <v-tab to="/about"> Another Option </v-tab>
        <v-tab> Another Option1 </v-tab>
        <v-tab> Another Option2 </v-tab>
        <v-tab> Another Option3 </v-tab>
        <v-btn> Button </v-btn>
      </div>
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

<style>
.nav {
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content: center;
}
</style>
