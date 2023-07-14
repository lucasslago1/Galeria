<template>
  <v-card class="mx-5 my-2 pa-3">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-text-field
            v-model="fullName"
            label="Nome completo"
            :disabled="true"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-text-field
            v-model="birthdate"
            label="Data de Nascimento"
            :disabled="true"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="goToStep(1)">Voltar</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="goToStep(3)">Continuar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentStep = ref(2);
const fullName = ref(""); // Preencher com dados recebidos da API de validação do CPF
const birthdate = ref(""); // Preencher com dados recebidos da API de validação do CPF

const goToStep = (step) => {
  if (step === currentStep.value - 1) {
    // Voltar para a etapa anterior
    router.push(`/step${step}`);
  } else if (step === currentStep.value + 1) {
    // Avançar para a próxima etapa
    router.push(`/step${step}`);
  }
};
</script>
