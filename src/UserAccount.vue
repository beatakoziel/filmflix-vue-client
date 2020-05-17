<template>
  <div id="user-page">
    <div id="header-banner-box">
      <home-header></home-header>
    </div>
    <account-card></account-card>
  </div>
</template>

<script>
import HomeHeader from "./shared/HomeHeader.vue";
import UserAccountCard from "./UserAccountCard.vue";
export default {
  components: {
    homeHeader: HomeHeader,
    accountCard: UserAccountCard
  }
};
</script>

<style scoped>
#user-page {
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  top: 0;
  position: absolute;
  background-color: #1a1a1a;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("./assets/poster3.jpg") no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: darken;
}

body {
  margin: 0;
  padding: 0;
  position: absolute;
  height: 100%;
  font-family: "Inter", sans-serif;
  background-color: #1a1a1a;
}
</style>