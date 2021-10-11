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
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :counter="10"
                  :rules="PasswordRules"
                  type="password"
                  label="Password"
                  required
                  outlined
                ></v-text-field>
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
export default {
  methods: {
    data() {
      return {
        User: {
          valid: true,
          PasswordRules: [
            (v) => !!v || "Password is required",
            (v) =>
              (v && v.length >= 8) ||
              "Password must be greater than 8 chararacters",
          ],
          password: "",
          email: "",
          emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
          ],
          Islogin: true,
        },
      };
    },
    GotoApp() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>
