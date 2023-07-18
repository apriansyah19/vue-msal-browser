<template>
  <div class="center">
    <div class="btn-container">
      <button type="submit" @click="Login">Login</button>
    </div>
  </div>
</template>

<script setup>
import { loginRequest, msalConfig } from "@/services/SSOMsal";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const Login = async () => {
  try {
    await msalConfig.loginPopup(loginRequest);
    router.push({ name: "dashboard" });
  } catch (error) {
    console.log(error);
    if (error.errorCode === "hash_does_not_contain_known_properties") {
      Login();
    }
  }
};

onBeforeMount(() => {
  localStorage.clear();
});
</script>

<style>
.btn-container {
  text-align: center;
}

.btn-container button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-container button:hover {
  background-color: #45a049;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}
</style>
