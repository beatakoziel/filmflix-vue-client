<template>
  <div class="card login-card-padding text-white">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="name">Imię i nazwisko</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Wprowadź imię i nazwisko"
          />
        </div>
        <div class="form-group">
          <label for="card_number">Numer karty</label>
          <input
            type="text"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
            class="form-control"
            id="card_number"
            maxlength="16"
            placeholder="Wprowadź numer karty"
          />
        </div>
        <div class="form-group">
          <label for="second_number">CVC</label>
          <input
            type="text"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
            class="form-control"
            id="cvc"
            maxlength="3"
            placeholder="Wprowadź trzy cyfry z tyłu karty"
          />
        </div>
        <div class="form-group">
          <label for="second_number">Data ważności karty</label>
          <input type="month" class="form-control" id="card_date" />
        </div>
        <button type="submit" class="btn-margin">
          <router-link to="/home">Zatwierdź dane do płatności</router-link>
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped>
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
</style>