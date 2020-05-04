<template>
  <div id="resources-sliders">
    <span id="error-span"></span>
    <p v-if="show">Komedia</p>
    <swiper v-if="show" ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="movie in filterEventsByCategory('komedia')"
        :key="`movie-${movie.id}`"
        v-bind:style="{ backgroundImage: 'url(' + movie.coverUri + ')' }"
        type="button"
      >
        <span class="title">{{movie.title}}</span>
        <router-link to="/play">
          <button class="slide-button" @click="showPopUpWindow(movie)"></button>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-if="show" class="swiper-button-next"></div>
    <div v-if="show" class="swiper-button-prev"></div>
  </div>
</template>

<script>
export default {
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  data() {
    return {
      movies: [],
      show: false,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 5,
        spaceBetween: 30
        //loop: true
        // Some Swiper option/callback...
      }
    };
  },
  beforeMount() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.$http
        .get("http://localhost:90/movies", {
          headers: {
            Authorization: this.$cookie.get("jwt")
          }
        })
        .then(
          response => {
            console.log(this.show);

            this.show = true;
            console.log(this.show);
            console.log(response);
            return response.json();
          },
          error => {
            this.show = false;
            document.getElementById("error-span").innerHTML =
              "Aby zobaczyć listę filmów należy się zalogować.";
            console.log(error);
          }
        )
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.movies = resultArray;
          console.log(this.movies);
        });
    },
    showPopUpWindow(movie) {},
    filterEventsByCategory(category) {
      return this.movies.filter(
        movie => movie.category.toUpperCase() === category.toUpperCase()
      );
    }
  }
};
</script>
<style scoped>
p {
  color: white;
  margin-top: 20px;
}
#resources-sliders {
  background-color: #1a1a1a;
  color: white;
  padding-bottom: 100px;
  font-size: 20px;
}

#resources-sliders p {
  font-size: 30px;
  padding: 10px;
  background-color: #1a1a1a;
}

.swal-modal {
  background-color: black !important;
  border-radius: 0px;
}

.slide-button {
  height: 200px;
  width: 250px;
  margin: 0px;
  background-color: transparent;
  border: none;
  outline: none;
}

.swiper-container {
  width: 100%;
  min-height: fit-content;
}

.swiper-slide {
  padding: 0px;
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
  margin-bottom: 10px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide {
  min-width: 200px;
  min-height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.swiper-slide:hover {
  box-shadow: 0px 0px 40px black;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  margin-top: 338px;
  color: white;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: lightpink;
}

:root {
  --swiper-theme-color: lightpink;
}

.title {
  display: none;
}
</style>