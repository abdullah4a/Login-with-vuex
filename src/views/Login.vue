<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          <v-icon>mdi-login</v-icon>
          &nbsp;
          <span class="text-h4 text-center">login</span>
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
    },
  },
};
</script>

<style lang="scss" scoped></style>
