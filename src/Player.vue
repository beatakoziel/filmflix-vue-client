<template>
  <video controls>
    <source :src="'http://localhost:90/movies/videos/' + resource" type="video/mp4" />
  </video>
</template>

<script>
export default {
  data() {
    return {
      resource: this.$route.params.resource
    };
  },
  watch: {
    $route(to, from) {
      this.resource = to.params.resource;
    }
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