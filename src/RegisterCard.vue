<template>
  <div class="card login-card-padding text-white">
    <div class="card-body">
      <form action="../register_plans/register.html">
        <div class="form-group">
          <label for="mail">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="mail"
            placeholder="Wprowadź e-mail"
            v-model="user.username"
            s
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
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="confirm_password"
            placeholder="Potwierdź hasło"
            v-model="user.repeatPassword"
          />
        </div>
        <button type="button" class="btn-margin" @click="submit">Zarejestruj</button>
        <span id="register-error-span"></span>
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
        password: "",
        repeatPassword: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.user);
      this.$http.post("http://localhost:90/register", this.user).then(
        response => {
          document.getElementById("register-error-span").innerHTML =
            "Zarejestrowano prawidłowo";
          document.getElementById("register-error-span").style =
            "color: lightgreen;";
          setTimeout(function() {
            window.location.href = "/register/payment";
          }, 100);
        },
        error => {
          document.getElementById("register-error-span").innerHTML =
            "Nieprawidłowe dane";
          document.getElementById("register-error-span").style =
            "color: lightcoral;";
          console.log(error);
        }
      );
    }
  }
};
</script>

<style scoped>
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

a {
  text-decoration: none;
  color: white;
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
  background-color: rgba(15, 15, 15, 0.9);
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
  font-weight: bold;
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))
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