<template>
  <div class="card payment-card-padding text-white">
    <div class="card-body">
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
          <input type="month" class="form-control" id="card_date" v-model="paymentDetails.cardDate" />
        </div>
        <button type="button" class="btn-margin" @click="submit">Zapłać</button>
        <span id="register-error-span"></span>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paymentDetails: {
        name: "",
        cardNumber: "",
        cvcNumber: "",
        cardDate: null
      }
    };
  },
  methods: {
    submit() {
      if (
        this.paymentDetails.name == "" ||
        this.paymentDetails.cardNumber == "" ||
        this.paymentDetails.cvcNumber == "" ||
        this.paymentDetails.cardDate == ""
      ) {
        document.getElementById("register-error-span").innerHTML =
          "Uzupełnij puste pola";
        document.getElementById("register-error-span").style =
          "color: lightcoral;";
      } else {
        var bearer = this.$cookie.get("jwt");
          if(bearer.startsWith("Bearer")){
          this.$http.post("http://localhost:8081/user/pay", " ", {
          headers: {
            Authorization: bearer
          }
        }).then(
            response => {
              document.getElementById("register-error-span").innerHTML =
                "Zarejestrowano prawidłowo";
              document.getElementById("register-error-span").style =
                "color: lightgreen;";
              setTimeout(function() {
                window.location.href = "/login";
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
          else{
            document.getElementById("register-error-span").innerHTML =
                "Nieprawidłowe dane";
              document.getElementById("register-error-span").style =
                "color: lightcoral;";
          }
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

.card-padding {
  padding: 0 15%;
}

.btn-margin {
  margin: 10px 0;
  float: right;
}

.payment-card-padding {
  margin: 10% 35%;
  box-shadow: 0px 0px 150px black;
  background-color: rgba(15, 15, 15, 0.65);
}

.form-control {
  border-radius: 0;
}

.payment-card-padding {
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
</style>