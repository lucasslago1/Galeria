<template>
  <v-card class="mx-5 my-2 pa-3">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-text-field v-model="imageUrl" label="URL da Imagem"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-img :src="imageUrl" height="100"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-textarea v-model="biography" label="Biografia"></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="goToStep(2)">Voltar</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="register">Cadastrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentStep = ref(3);
const imageUrl = ref("");
const biography = ref("");

const goToStep = (step) => {
  if (step === currentStep.value - 1) {
    // Voltar para a etapa anterior
    router.push(`/step${step}`);
  } else if (step === currentStep.value + 1) {
    // Avançar para a próxima etapa
    router.push(`/step${step}`);
  }
};

function register() {
  // Realizar o cadastro com os dados preenchidos
  // Redirecionar para a página de listagem de pessoas
  router.push(`/gallery`);
}
</script>
