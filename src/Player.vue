<template>
  <video controls>
    <source :src="'http://localhost:90/movies/videos/' + resource" type="video/mp4" />
  </video>
</template>

<script>
export default {
  data() {
    return {
      resource: this.$route.params.resource,
      video: null
    };
  },
  watch: {
    $route(to, from) {
      this.resource = to.params.resource;
    }
  },
  mounted() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      this.$http
        .get("'http://localhost:90/movies/videos/' + this.resource", {
          headers: {
            Authorization: this.$cookie.get("jwt")
          }
        })
        .then(
          response => {
            conosle.log(response);
            console.log(this.resource);
            video = response;
            return response.json();
          },
          error => {
            console.log(error);
          }
        );
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

video:focus{
  outline: none;
}
</style>