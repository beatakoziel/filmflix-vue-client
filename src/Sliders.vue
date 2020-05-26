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
      <button class="slide-button" id="popup-window-button" @click="showPopUpWindow(movie)"></button>       
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <p v-if="show">Akcja</p>
    <swiper v-if="show" ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="movie in filterEventsByCategory('akcja')"
        :key="`movie-${movie.id}`"
        v-bind:style="{ backgroundImage: 'url(' + movie.coverUri + ')' }"
        type="button"
      >
      <button class="slide-button" id="popup-window-button" @click="showPopUpWindow(movie)"></button> 
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <p v-if="show">Thriller</p>
    <swiper v-if="show" ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="movie in filterEventsByCategory('thriller')"
        :key="`movie-${movie.id}`"
        v-bind:style="{ backgroundImage: 'url(' + movie.coverUri + ')' }"
        type="button"
      >
      <button class="slide-button" id="popup-window-button" @click="showPopUpWindow(movie)"></button> 
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <div id="myModal" class="modal">
      <div id="insideModal" class="modal-content">    
        <button class="close" @click="closePopUpWindow()">&times;</button>
      </div>    
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      opinions: [],
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
        spaceBetween: 30,
        static: false,
        //loop: true
      }
    };
  },
  beforeMount() {
    this.getMovies();
    document.addEventListener('keyup', (e) => {
      if (document.getElementById("title-content") && (e.code === "Escape" || e.code === "Esc")) this.closePopUpWindow();
    });
  },
  methods: {
    completeOpinions(newOpinion){
      var opinionsArray = [];
      var opinionsDiv;
      if(!document.getElementById("opinions-div-content"))
        {
          opinionsDiv = document.createElement("DIV");
          opinionsDiv.setAttribute('id','opinions-div-content');
          opinionsDiv.style.cssText = "position: absolute; margin-top: 15%; width: 96%; height: 60%; overflow-y: auto;";
          opinionsArray = Array.from(this.opinions);
        }
      else
        opinionsDiv = document.getElementById("opinions-div-content");
      if(newOpinion !== null)
      {
        var additionalOpinion = {comment: newOpinion};
        opinionsArray.push(additionalOpinion);
      }
      opinionsArray.forEach(singleOpinion => {
        var singleOpinionDiv = document.createElement("DIV");
        singleOpinionDiv.innerHTML = singleOpinion.comment;
        singleOpinionDiv.style.cssText = "border: 0.2px gray; border-style: hidden hidden solid hidden; margin-bottom: 2px; width: 98%; word-wrap: break-word;";
        opinionsDiv.appendChild(singleOpinionDiv);
      });
      document.getElementById("insideModal").appendChild(opinionsDiv);
    },
    showOpinionsPopUp(movie){    
      var _this = this;    
      var modal = document.getElementById("myModal");
      var divInModal = document.getElementById("insideModal");

      var title = document.createElement("DIV");
      title.innerHTML = "Opinie do filmu \"" + movie.title + "\"";
      title.setAttribute('id','title-content')
      title.style.margin="auto";
      title.style.padding="5px";
      title.style.marginTop="25px";

      var backBtn = document.createElement("BUTTON");
      backBtn.setAttribute('id','backBtn-content');
      backBtn.onclick = function(){
        _this.closePopUpWindow();
        _this.showPopUpWindow(movie);
      }; 
      backBtn.style.cssText = "font-size: 45px; position: absolute; top: 0%; margin-left: 2.5%; border: none; background: none; color: gray;";
      backBtn.addEventListener('mouseenter', e => {backBtn.textContent = "⇦";});
      backBtn.addEventListener('mouseleave', e => {backBtn.textContent = "⇽";});
      backBtn.textContent = "⇽";

      var signLimit = document.createElement("DIV");
      signLimit.innerHTML = "Limit znaków: 200";
      signLimit.setAttribute('id','sign-limit-content')
      signLimit.style.color = "white";
      signLimit.style.fontSize = "10px";
      signLimit.style.visibility = "hidden";
      signLimit.style.marginTop = "7%"
      signLimit.style.position = "absolute";

      var addOpinionTextField = document.createElement("INPUT");
      addOpinionTextField.setAttribute("type", "text");
      addOpinionTextField.setAttribute('id','opinion-input');
      addOpinionTextField.setAttribute('autocomplete','off');
      addOpinionTextField.oninput = function(){
        signLimit.style.visibility = "visible";
        var fieldLength = addOpinionTextField.value.length;
        if(fieldLength <= 200){ //limit znakow 200      
          var marLeft = 2 + fieldLength;
          if(marLeft > 78) marLeft = 78;
           signLimit.style.marginLeft = (marLeft).toString() + "%";
          signLimit.innerHTML = "Limit znaków: " + (200-fieldLength);
          return true;
        }
        else{
          var str = addOpinionTextField.value;
          str = str.substring(0, str.length - 1);
          addOpinionTextField.value = str;
        }
      };
      addOpinionTextField.style.cssText = "position: absolute; width: 76%; margin-top: 9vh; margin-left: 2%; background-color: #404040; border: none; color: white;";

      var addOpinionBtn = document.createElement("BUTTON");
      addOpinionBtn.onclick = function(){
        signLimit.style.visibility = "hidden";
        if(addOpinionTextField.value.length > 0){
        _this.addOpinion(addOpinionTextField.value, movie.id);
        _this.completeOpinions(addOpinionTextField.value);
        addOpinionTextField.value = '';
        }      
      }; 
      var cssForAddOpinionButton = "position: absolute; margin-top: 9vh; margin-left: 80%; padding-right: 4%; border: none; background: none; color: white;";
      addOpinionBtn.style.cssText = cssForAddOpinionButton;
      addOpinionBtn.addEventListener('mouseenter', e => {addOpinionBtn.style.cssText = cssForAddOpinionButton + "font-weight: bold; letter-spacing: -0.65px;"});
      addOpinionBtn.addEventListener('mouseleave', e => {addOpinionBtn.style.cssText = cssForAddOpinionButton + "font-weight: normal"});
      addOpinionBtn.textContent = "Dodaj opinie"   
      addOpinionBtn.setAttribute('id','opinionBtn-content')
     
      divInModal.appendChild(title);
      divInModal.appendChild(addOpinionTextField);
      divInModal.appendChild(addOpinionBtn);   
      divInModal.appendChild(backBtn);  
      divInModal.appendChild(signLimit);  
      this.completeOpinions(null);

      modal.style.display = "block";
    },
    closePopUpWindow() {
      var divInModal = document.getElementById("insideModal");
      var modal = document.getElementById("myModal");

      var listOfObjects=[];
      listOfObjects.push(document.getElementById("backBtn-content"));
      listOfObjects.push(document.getElementById("title-content"));
      listOfObjects.push(document.getElementById("description-content"));
      listOfObjects.push(document.getElementById("playBtn-content"));
      listOfObjects.push(document.getElementById("opinionBtn-content"));
      listOfObjects.push(document.getElementById("opinion-input"));
      listOfObjects.push(document.getElementById("sign-limit-content"));
      
      if(document.getElementById("opinions-div-content")){
        var opinions = document.getElementById("opinions-div-content");
          while(opinions.firstChild){
            opinions.removeChild(opinions.lastChild);           
          }
        listOfObjects.push(opinions);
      }
      

      listOfObjects.forEach(element => {
        if(element)
          divInModal.removeChild(element);
      });

      modal.style.display = "none";
    },
    showPopUpWindow(movie) {
      var modal = document.getElementById("myModal");
      var divInModal = document.getElementById("insideModal");

      var title = document.createElement("DIV");
      title.innerHTML = movie.title;
      title.setAttribute('id','title-content')
      title.style.margin="auto";
      title.style.padding="5px";
      title.style.marginTop="25px";

      var description = document.createElement("DIV");
      description.innerHTML = movie.description;
      description.setAttribute('id','description-content')
      description.style.padding="5px";
      description.style.margin="auto";
      description.style.marginTop="-50px";

      var linkToMovie = '/play/' + movie.resourceUri;
      var playBtn = document.createElement("BUTTON");
      var myRouter = this.$router;
      playBtn.onclick = function(){myRouter.push(linkToMovie);};
      var cssForPlayButton = "position: absolute; margin-top: 40vh; margin-left: 4%; width: auto; border: none; background: none;  color: white;"; 
      playBtn.style.cssText = cssForPlayButton;
      playBtn.addEventListener('mouseenter', e => {playBtn.style.cssText = cssForPlayButton + "font-weight: bold; letter-spacing: -0.9px;"});
      playBtn.addEventListener('mouseleave', e => {playBtn.style.cssText = cssForPlayButton + "font-weight: normal"});
      playBtn.textContent = "Otwórz film"   
      playBtn.setAttribute('id','playBtn-content')

      let _this = this;
      var opinionBtn = document.createElement("BUTTON");
      this.getOpinions(movie.id);
      opinionBtn.onclick = function(){_this.closePopUpWindow(); _this.showOpinionsPopUp(movie)};
      var cssForOpinionButton = "position: absolute; margin-top: 40vh; margin-left: 76%; padding-right: 4%; border: none; background: none; color: white;";
      opinionBtn.style.cssText = cssForOpinionButton;
      opinionBtn.addEventListener('mouseenter', e => {opinionBtn.style.cssText = cssForOpinionButton + "font-weight: bold; letter-spacing: -0.55px;"});
      opinionBtn.addEventListener('mouseleave', e => {opinionBtn.style.cssText = cssForOpinionButton + "font-weight: normal"});
      opinionBtn.textContent = "Zobacz opinie"   
      opinionBtn.setAttribute('id','opinionBtn-content')

      divInModal.appendChild(title);
      divInModal.appendChild(description);
      divInModal.appendChild(playBtn);
      divInModal.appendChild(opinionBtn);
      modal.style.display = "block";
    },
    getMovies() {
      this.$http
        .get("http://localhost:8081/movies", {
          headers: {
            Authorization: this.$cookie.get("jwt")
          }
        })
        .then(
          response => {
            this.show = true;
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
    getOpinions(movieId) {
      this.$http
        .get("http://localhost:8081/movies/" + movieId + "/opinions", {
          headers: {
            Authorization: this.$cookie.get("jwt")
          }
        })
        .then(
          response => {
            this.show = true;
            console.log(response);
            return response.json();
          },
          error => {
            this.show = false;
            console.log(error);
          }
        )
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.opinions = resultArray;
          console.log(this.opinions);
        });       
    },
    addOpinion(comment, movieId){
      var data = "{\"comment\"" + ":" + "\"" + comment + "\"}";
      this.$http
        .post("http://localhost:8081/movies/" + movieId + "/opinions", data, {
          headers: {
            Authorization: this.$cookie.get("jwt")
          }
        }).then(
          response => {
            /*document.getElementById("register-error-span").innerHTML =
              "Zarejestrowano prawidłowo";
            document.getElementById("register-error-span").style =
              "color: lightgreen;";
            setTimeout(function() {
              window.location.href = "/register/payment";
            }, 100);*/
            console.log(response);
          },
          error => {
            /*document.getElementById("register-error-span").innerHTML =
              "Nieprawidłowe dane";
            document.getElementById("register-error-span").style =
              "color: lightcoral;";*/
            console.log(error);
          }
        );
    },
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

.slide-button:hover {
  
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
  z-index: 1;
  transform: scale(1.16);
}
.swiper-button-prev,
.swiper-button-next {
  margin-top: 0px;
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

/* Popup window */
.modal {
  display: none; 
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: none; 
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #1a1a1ae0; /*#1a1a1a*/
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 0px;
  border-radius: 0px;
  width: 50%;
  height: 50%;
  min-width: 800px;
  -webkit-box-shadow: 0px 0px 200px 60px rgba(0,0,0,0.7);
  -moz-box-shadow: 0px 0px 200px 60px rgba(0,0,0,0.7);
  box-shadow: 0px 0px 200px 60px rgba(0,0,0,0.7);
}

.close {
  color: white;
  position:fixed;
  float: right; 
  margin-left: 45%;
  width: 20px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus{
  color: gray;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
}
</style>