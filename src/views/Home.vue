<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <v-card>
      <v-card-title>
        <v-icon>mdi-account-multiple</v-icon>&nbsp;
        <span>
          Admins
        </span>
      </v-card-title>
    </v-card>
    <v-card>
      <v-card-title>
        <v-icon>mdi-account-multiple</v-icon>&nbsp;
        <span>
          Users
        </span>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { Data } from "../shared";
export default {
  name: "Home",
  data() {
    return {
      users: [],
      admins: [],
    };
  },
  async created() {
    this.users = await Data.GetUsers();
    this.admins = await Data.GetAdmins();
  },
};
</script>
