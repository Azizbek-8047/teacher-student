<template>
  <div class="log-in">
    <div class="left">
      <div class="auth">
        <h1>LogIn: teacher</h1>
        <h1>Password: teacher</h1>
      </div>
      <div class="auth2">
        <h1>LogIn: student</h1>
        <h1>Password: student</h1>
      </div>
      <p>The most popular Teacher-Student Platform</p>
    </div>
    <div class="right">
      <h1>Welcome Back</h1>
      <custom-input
        name="student"
        v-model="username"
        :placeholder="'User Name'"
      />
      <custom-input
        :type="'password'"
        v-model="password"
        :placeholder="'Password'"
      />
      <custom-button class="btn" @click="logIn" :btn="'Log In'" />
    </div>
  </div>
</template>

<script>
import CustomInput from "@/components/Custom-Input.vue";
import CustomButton from "@/components/Custom-Button.vue";
export default {
  components: {
    "custom-input": CustomInput,
    "custom-button": CustomButton,
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async logIn() {
      let type = await this.$store.dispatch("checkUser", {
        login: this.username,
        password: this.password,
      });
      type && this.$router.push(`/${type}`);
    },
  },
};
</script>

<style>
</style>