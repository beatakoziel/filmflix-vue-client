<template>
  <div id="banner">
    <div id="description-box">
      <h1 id="banner-title">FILMFLIX</h1>
      <p id="banner-description">
        Serwis, w którym masz dostęp do filmów i seriali!
        <br />Usiądź wygodnie w domowym zaciszu i ciesz się wyborem.
        <br />Bez płyt, bez zbędnych opakowań, ze stałym dostępem.
        <br />
      </p>
      <button id="banner-button">Więcej informacji</button>
    </div>
  </div>
</template>

<style scoped>
#banner {
  padding: 100px 25px;
  margin-bottom: -20px;
}

#description-box {
  width: 50%;
}

#description-box h1 {
  font-size: 70px;
}

#description-box p {
  font-size: 20px;
}

#banner-button {
  font-size: 20px;
  padding: 10px;
  color: white;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  background: rgba(0, 0, 0, 0.5);
}

#banner-button:hover {
  color: lightpink;
}
</style>