<template>
  <video controls>
    <source src="http://localhost:90/movies/videos/Sniper" type="video/mp4" />
  </video>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {}
    };
  }
};
</script>
<style>
body {
  background-color: black;
}
video {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>