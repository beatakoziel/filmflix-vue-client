<template>
  <header>
    <div id="logo">FILMFLIX</div>
    <div class="menu" id="left-menu">
      <ul>
        <li>
          <a id="current-category">Filmy</a>
        </li>
        <li>
          <a>Seriale</a>
        </li>
      </ul>
    </div>
    <div class="menu" id="right-menu">
      <ul>
        <li>
          <a @click="rou">Profil</a>
          <ul>
            <li>
              <a @click="rou">Konto</a>
            </li>
            <li>
              <a @click="logout">
                <router-link to="/login">Wyloguj się</router-link>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookie.set("jwt", "", 1);
    },
    rou() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  overflow: auto;
  color: white;
  padding-left: 25px;
  padding-right: 25px;
}

#logo {
  float: left;
  margin-right: 25px;
  padding: 15px;
  font-family: "Francois One", sans-serif;
  font-size: 20px;
  letter-spacing: 1.5px;
}

#left-menu {
  float: left;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.menu ul li {
  float: left;
  padding: 15px;
  text-decoration: none;
}

.menu ul li a {
  position: relative;
  color: white;
  text-decoration: none;
}

.menu ul li a:hover {
  color: lightpink;
}

#current-category {
  font-weight: bold;
}

#right-menu {
  float: right;
  color: black;
  padding-right: 50px;
}

#right-menu li ul {
  margin: 0;
  padding: 0;
  margin-right: 10px;
  margin-top: 10px;
  position: absolute;
  z-index: 100;
  display: none;
  border: solid 1px white;
}

#right-menu li:hover ul {
  display: block;
}

#right-menu li ul li {
  display: block;
  width: 100%;
}

#right-menu li ul li a {
  width: 100%;
}

.search-box {
  position: relative;
  float: left;
  transform: translate(0%, -25%);
  background: rgba(0, 0, 0, 0);
  height: 20px;
  padding: 6;
  margin-right: -5;
  border: solid 1px black;
}

.search-btn {
  color: rgba(0, 0, 0, 0);
  float: left;
  width: 20px;
  height: 20px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}

.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.2s;
  line-height: 20px;
  width: 0px;
  font-weight: bold;
}
</style>