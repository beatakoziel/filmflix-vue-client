<template>
  <div class="card card-padding text-white">
    <div class="card-body">
      <div class="user-panel">
        <div class="icon"></div>
        <br />
        <span>Email użytkownika:</span>
        <p>{{user.email}}</p>
        <span>Status płatności:</span>
        <p v-if="user.planPaid==true" style="color:lightgreen;">Plan opłacony</p>
        <div v-else class="unpaid-plan">
          <p style="color:lightcoral;">Plan nieopłacony</p>
        </div>
      </div>
      <div v-if="user.planPaid==false" class="payment-panel">
        <form>
          <div class="form-group">
            <label for="name">Imię i nazwisko</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Wprowadź imię i nazwisko"
              v-model="paymentDetails.name"
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
              v-model="paymentDetails.cardNumber"
            />
          </div>
          <div class="form-group">
            <label for="cvc">CVC</label>
            <input
              type="text"
              onkeypress="return event.charCode >= 48 && event.charCode <= 57"
              class="form-control"
              id="cvc"
              maxlength="3"
              placeholder="Wprowadź trzy cyfry z tyłu karty"
              v-model="paymentDetails.cvcNumber"
            />
          </div>
          <div class="form-group">
            <label for="card_date">Data ważności karty</label>
            <input
              type="month"
              class="form-control"
              id="card_date"
              v-model="paymentDetails.cardDate"
            />
          </div>
          <button type="button" class="btn-margin" @click="pay">Zapłać</button>
          <span id="register-error-span"></span>
        </form>
      </div>
      <div v-else class="change-pass-panel">
        <form action="../register_plans/register.html">
          <div class="form-group">
            <label for="password">Hasło</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Wprowadź hasło"
              v-model="userPasswords.password"
              @keyup.enter="submit"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="confirm_password"
              placeholder="Potwierdź hasło"
              v-model="userPasswords.repeatPassword"
              @keyup.enter="submit"
              required="required"
            />
          </div>
          <button type="button" class="btn-margin" @click="submit">Zmień hasło</button>
          <span id="register-error-span"></span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        planPaid: false
      },
      paymentDetails: {
        name: "",
        cardNumber: "",
        cvcNumber: "",
        cardDate: null
      },
      userPasswords: {
        password: "",
        repeatPassword: ""
      },
      show: false
    };
  },
  beforeMount() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$http
        .get("http://localhost:8081/user", {
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
              "Aby zobaczyć dane należy się zalogować.";
            console.log(error);
          }
        )
        .then(data => {
          this.user = data;
          console.log(this.user);
        });
    },
    pay() {
        if (this.paymentDetails.name == "" || 
        this.paymentDetails.cardNumber == "" || 
        this.paymentDetails.cvcNumber == "" ||
        this.paymentDetails.cardDate == ""
        ) {
        document.getElementById("register-error-span").innerHTML =
          "Uzupełnij puste pola";
        document.getElementById("register-error-span").style =
          "color: lightcoral;";
      } else {
        this.$http.post("http://localhost:8081/user/pay", this.user).then(
          response => {
            this.$cookie.set("jwt", "Bearer " + response.body.jwt, 1);
            console.log("COOKIE");
            console.log(this.$cookie.get("jwt"));
            document.getElementById("register-error-span").innerHTML =
              "Zalogowano prawidłowo";
            document.getElementById("register-error-span").style =
              "color: lightgreen;";
            setTimeout(function() {
              window.location.href = "/home";
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
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
}

#error-span {
  float: left;
  padding-top: 20px;
  margin-top: 30px;
}

.card-padding {
  padding: 0 7%;
}

.btn-margin {
  margin: 10px 0;
  float: right;
}

.card-padding {
  margin: 2% 20%;
  min-height: 500px;
  background-color: rgba(15, 15, 15, 0.8);
}

.card-padding {
  border-radius: 0;
}

.btn-margin {
  border-radius: 0;
  color: white;
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}

.icon {
  width: 64px;
  height: 64px;
  background: url("./assets/user.png") no-repeat center;
}

.user-panel {
  float: left;
  margin-top: 50px;
  margin-right: 100px;
}

.payment-panel {
  margin-top: 50px;
  float: right;
}

.change-pass-panel {
  margin-top: 50px;
  float: right;
}

.form-control {
  border-radius: 0;
}
</style>