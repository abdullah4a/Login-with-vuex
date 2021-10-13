<template>
  <div class="home">
    <v-card>
      <v-card-title>
        <v-icon>mdi-account-multiple</v-icon>&nbsp;
        <span>
          Admins
        </span>
      </v-card-title>
      <v-card-text>
        <v-card-text>
          <div v-if="admins">
            <ul v-for="admin in admins" :key="admin.id">
              <li>{{ admin.id }}</li>
              <li>{{ admin.username }}</li>
              <li>{{ admin.name }}</li>
              <li>{{ admin.lastname }}</li>
              <li>{{ admin.email }}</li>
              <li>{{ admin.isactive }}</li>
            </ul>
          </div>
        </v-card-text>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>
        <v-icon>mdi-account-multiple</v-icon>&nbsp;
        <span>
          Users
        </span>
        <v-card-text>
          <div v-if="users">
            <ul v-for="user in users" :key="user.id">
              <li>{{ user.id }}</li>
              <li>{{ user.username }}</li>
              <li>{{ user.name }}</li>
              <li>{{ user.lastname }}</li>
              <li>{{ user.email }}</li>
              <li>{{ user.isactive }}</li>
            </ul>
          </div>
        </v-card-text>
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
  methods: {
    async LoadUsers() {
      this.users = await Data.GetUsers();
    },
    async LoadAdmins() {
      this.admins = await Data.GetAdmins();
    },
  },
  async created() {
    await this.LoadAdmins();
    await this.LoadUsers();
  },
};
</script>
