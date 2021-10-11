<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          <v-icon>mdi-login</v-icon>
          &nbsp;
          <span>login</span>
        </v-card-title>
        <v-card-actions>
          <v-btn plain @click="GotoApp">
            Login
          </v-btn>
          <v-btn>
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        User: {
          Islogin: true,
        },
      };
    },
    GotoApp() {
      this.$emit("Loginfun", this.User.Islogin);
    },
  },
};
</script>

<style lang="scss" scoped></style>
