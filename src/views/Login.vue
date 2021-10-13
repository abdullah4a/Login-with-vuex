<template>
  <v-app>
    <v-container text-center>
      <v-row row wrap>
        <v-col>
          <v-card width="550">
            <v-card-title class="justify-center">
              <v-icon>mdi-login</v-icon>
              &nbsp;
              <span class="text-h4">login</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="user.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="user.password"
                  :counter="10"
                  :rules="PasswordRules"
                  type="password"
                  label="Password"
                  required
                  outlined
                ></v-text-field>
                <v-text-field v-model="type" label="Login Type"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn plain :disabled="!valid" @click="GotoApp">
                <v-icon>mdi-login</v-icon>&nbsp;
                <span>Login</span>
              </v-btn>
              <v-btn plain>
                <v-icon> mdi-cancel </v-icon> &nbsp; <span>Cancel</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      valid: true,
      PasswordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) ||
          "Password must be greater than 8 chararacters",
      ],
      user: { password: "", email: "" },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      type: "",
      Islogin: true,
    };
  },
  methods: {
    ...mapActions(["LoginUserAct"]),
    ...mapActions(["LoginAdminAct"]),
    GotoApp() {
      if (this.type === "User" || this.type == "user") {
        this.LoginUserAct(this.user);
      } else if (this.type === "Admin" || this.type === "admin") {
        this.LoginAdminAct(this.user);
      } else {
        console.log("No User or Admin Exist of this type+");
      }
      // this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>
