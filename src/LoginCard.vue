<template>
  <div class="card login-card-padding text-white">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="username">Nazwa użytkownika</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Wprowadź login"
            v-model="user.username"
            @keyup.enter="submit"
          />
        </div>
        <div class="form-group">
          <label for="password">Hasło</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Wprowadź hasło"
            v-model="user.password"
            @keyup.enter="submit"
          />
        </div>
        <button type="button" class="btn-margin" @click="submit">Zaloguj</button>
        <span id="login-error-span"></span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      if (this.user.username == "" || this.user.password == "") {
        document.getElementById("login-error-span").innerHTML =
          "Uzupełnij puste pola";
        document.getElementById("login-error-span").style =
          "color: lightcoral;";
      } else {
        this.$http.post("http://localhost:90/login", this.user).then(
          response => {
            this.$cookie.set("jwt", "Bearer " + response.body.jwt, 1);
            console.log("COOKIE");
            console.log(this.$cookie.get("jwt"));
            document.getElementById("login-error-span").innerHTML =
              "Zalogowano prawidłowo";
            document.getElementById("login-error-span").style =
              "color: lightgreen;";
            setTimeout(function() {
              window.location.href = "/home";
            }, 100);
          },
          error => {
            document.getElementById("login-error-span").innerHTML =
              "Nieprawidłowe dane";
            document.getElementById("login-error-span").style =
              "color: lightcoral;";
            console.log(error);
          }
        );
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

body {
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
  font-family: "Inter", sans-serif;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.card-padding {
  padding: 0 15%;
}

.btn-margin {
  margin: 10px 0;
  float: right;
}

.login-card-padding {
  margin: 10% 35%;
  box-shadow: 0px 0px 150px black;
  background-color: rgba(15, 15, 15, 0.65);
}

.form-control {
  border-radius: 0;
}

.login-card-padding {
  border-radius: 0;
}

.btn-margin {
  border-radius: 0;
  color: white;
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.btn-margin:hover {
  text-decoration: overline;
}

#logo {
  margin-right: 25px;
  margin-left: 25px;
  font-family: "Francois One", sans-serif !important;
  font-size: 20px;
  letter-spacing: 1.5px;
  color: white;
}

.navbar-custom {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: darken;
  color: white;
  box-shadow: 0px 0px 100px black;
}

#btn-zarejestruj {
  position: relative;
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

#btn-zarejestruj:hover {
  font-weight: bold;
}
</style>