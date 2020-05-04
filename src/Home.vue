<template>
  <div id="home-page">
    <div id="header-banner-box">
      <home-header></home-header>
      <banner></banner>
    </div>
    <sliders></sliders>
  </div>
</template>

<script>
import HomeHeader from "./shared/HomeHeader.vue";
import Banner from "./Banner.vue";
import Sliders from "./Sliders.vue";
export default {
  components: {
    homeHeader: HomeHeader,
    banner: Banner,
    sliders: Sliders
  }
};
</script>

<style scoped>
#home-page {
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  top: 0;
  position: absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: darken;
  background-color: #1a1a1a;
}
body {
  margin: 0;
  padding: 0;
  position: absolute;
  height: 100%;
  font-family: "Inter", sans-serif;
  background-color: #1a1a1a;
}

#header-banner-box {
  background-color: #1a1a1a;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("./assets/poster3.jpg") no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: darken;
  color: white;
  box-shadow: 0px 0px 50px black;
}
</style>