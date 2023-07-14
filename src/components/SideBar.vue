<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["theme-changed"]);
const currentTheme = ref("light");
const isDarkMode = ref(false);

const changeTheme = () => {
  if (currentTheme.value === "light") {
    emit("theme-changed", "dark");
    currentTheme.value = "dark";
    isDarkMode.value = true;
  } else {
    emit("theme-changed", "light");
    currentTheme.value = "light";
    isDarkMode.value = false;
  }
};

const menuItems = [
  {
    title: "Listagem",
    icon: "mdi-format-list-bulleted",
    path: "/gallery",
  },
  {
    title: "Cadastrar Pessoa",
    icon: "mdi-account-plus",
    path: "/cadastro",
  },
];
</script>

<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/17.jpg"
        title="Lucas Lago"
        subtitle="lucasslago@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.path"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.path"
        :to="item.path"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-theme-light-dark"
        :title="isDarkMode ? 'Light Mode' : 'Dark Mode'"
        value="dark"
        @click="changeTheme"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
