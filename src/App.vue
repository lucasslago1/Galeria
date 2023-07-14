<template>
  <v-app :theme="appTheme">
    <!-- SIDEBAR -->
    <Sidebar @theme-changed="updateTheme"></Sidebar>

    <!-- ROTEAMENTO -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "./components/SideBar.vue";
import { ref } from "vue";

const appTheme = ref("light");

const updateTheme = (newTheme) => {
  appTheme.value = newTheme;
};
</script>
