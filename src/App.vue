<template>
  <div id="app">
    <router-link
      class="login"
      :class="{
        login_link: $route.path == '/',
      }"
      :to="{ name: 'login' }"
    >
      Log In
    </router-link>
    <router-link
      class="log_out"
      :class="{
        log_out_link: $route.path != '/' && $route.path != '/login' 
      }"
      :to="{name: '/'}"
    >
      Log Out
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped >
a {
  position: fixed;
  right: 0;
  top: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  background: #0575e6;
  padding: 10px;
  border-radius: 30px;
  margin: 15px;
  text-decoration: none;
  transition: 0.5s;
}

a:hover {
  color: #ffffff;
}

.login {
  display: none;
}

.login_link {
  display: block;
}

.log_out {
  display: none;
}
.log_out_link {
  display: block;
}

</style>