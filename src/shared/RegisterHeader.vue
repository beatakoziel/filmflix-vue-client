<template>
  <nav class="navbar navbar-expand-lg navbar-custom" id="nav-header">
    <a class="navbar-brand">
      <div id="logo">FILMFLIX</div>
    </a>

    <div class="collapse navbar-collapse"></div>
    <form class="form-inline my-2 my-lg-0">
      <a id="btn-login">
        <router-link to="/login">Zaloguj się</router-link>
      </a>
    </form>
  </nav>
</template>

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
  color: burlywood;
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

#btn-login {
  position: relative;
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

#btn-login:hover {
  text-decoration: overline;
}
</style>