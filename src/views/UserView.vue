<template>
  <div class="login">
    <v-img
      class="mx-auto my-6"
      max-width="300"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>
    <br />
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="5"
      max-width="500"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="default"
        placeholder="ID"
        :rules="rules"
        required
        hide-details
        prepend-inner-icon="mdi-account"
        maxlength="50"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Password</div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        :rules="rules"
        required
        hide-details
        density="default"
        placeholder="Password"
        prepend-inner-icon="mdi-lock"
        @click:append-inner="visible = !visible"
        maxlength="50"
      ></v-text-field>
      <br />
      <v-btn
        block
        class="mb-3"
        color="blue"
        size="large"
        variant="outlined"
        height="50px"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      visible: false,
      rules: [
        (value) => {
          if (value) return true;
          return "You must enter something";
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
.login {
  margin-top: 100px;
}
</style>
