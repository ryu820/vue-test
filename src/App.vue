<template>
  <v-app>
    <v-tabs fixed-tabs>
      <div class="nav">
        <v-img :width="100" aspect-ratio="1/1" src="./assets/logo.png"></v-img>
        <div :key="i" v-for="(tab, i) in tabList">
          <v-tab :to="tab.tab_link"> {{ tab.tab_name }} </v-tab>
        </div>
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
    tabList: [
      {
        tab_link: "/",
        tab_name: "Option",
      },
      {
        tab_link: "/about",
        tab_name: "Another Option",
      },
      {
        tab_link: "/",
        tab_name: "Option1",
      },
      {
        tab_link: "/about",
        tab_name: "Another Option1",
      },
      {
        tab_link: "/",
        tab_name: "Option2",
      },
    ],
  }),
};
</script>

<style>
.nav {
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content: center;
  align-items: center;
}
</style>
