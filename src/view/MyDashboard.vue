<template>
  <div class="container">
    <h1>{{ userName }}</h1>

    <div class="card">
      <h2>Card 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
        aliquam urna, eu viverra metus posuere in.
      </p>
    </div>
    <div class="card">
      <h2>Card 2</h2>
      <p>
        Quisque non est vitae sem pretium tempus vitae nec quam. Integer a
        aliquam enim.
      </p>
    </div>
    <div class="card">
      <h2>Card 3</h2>
      <p>
        Maecenas et est et quam porttitor interdum. Nam lobortis, sem non
        pharetra tristique, justo neque pulvinar dui.
      </p>
    </div>
    <div class="logout-btn">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { msalConfig } from "@/services/SSOMsal";
import { computed } from "vue";

const userName = computed(() => {
  return msalConfig.getAllAccounts()[0]?.username;
});

const logout = async () => {
  const logoutRequest = {
    account: msalConfig.getAccountByHomeId(
      msalConfig.getAllAccounts()[0].homeAccountId
    ),
    // mainWindowRedirectUri: "http://localhost:8081",
    mainWindowRedirectUri: "https://vue-msal-browser.netlify.app/sign-in",
  };
  try {
    await msalConfig.logoutPopup(logoutRequest);
  } catch (error) {
    console.log(error, "error");
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.card {
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.card h2 {
  color: #555;
  margin-top: 0;
}

.card p {
  color: #777;
}

.logout-btn {
  display: block;
  margin-top: 20px;
  text-align: center;
}

.logout-btn button {
  padding: 10px 20px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-btn button:hover {
  background-color: #333;
}
</style>
