<template>
  <div id="login-page">
    <login-header></login-header>
    <login-card></login-card>
  </div>
</template>

<script>
import LoginHeader from "./shared/LoginHeader.vue";
import LoginCard from "./LoginCard.vue";
export default {
  components: {
    loginHeader: LoginHeader,
    loginCard: LoginCard
  }
};
</script>
<style scoped>
body {
  height: 100%;
}
#login-page {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("./assets/login_background.jpg") no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: darken;
}
</style>