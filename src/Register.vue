<template>
  <div id="register-page">
    <register-header></register-header>
    <register-card></register-card>
  </div>
</template>

<script>
import RegisterHeader from "./shared/RegisterHeader.vue";
import RegisterCard from "./RegisterCard.vue";
export default {
  components: {
    registerHeader: RegisterHeader,
    registerCard: RegisterCard
  }
};
</script>
<style scoped>
body {
  height: 100%;
}
#register-page {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)),
    url("./assets/poster4.jpg") no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: darken;
}
</style>