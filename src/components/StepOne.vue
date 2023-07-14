<template>
  <v-card class="mx-5 my-2 pa-3">
    <v-card-text>
      <v-row align="center">
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-text-field
            v-model="cpf"
            label="CPF"
            @input="validateCPF"
            :rules="cpfRules"
            :loading="loadingCPF"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="2">
          <v-icon :color="cpfStatusColor">{{ cpfStatusIcon }}</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="cancel">Cancelar</v-btn>
      <v-btn color="primary" :disabled="!isCPFValid" @click="goToStep(2)"
        >Continuar</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cpf = ref("");
const cpfStatus = ref("");
const loadingCPF = ref(false);

const cpfRules = computed(() => [
  (v) => !!v || "CPF é obrigatório",
  (v) => (v && v.length === 11) || "CPF deve ter 11 dígitos",
]);

const isCPFValid = computed(() => cpfStatus.value === "valid");

const cpfStatusIcon = computed(() => {
  if (cpfStatus.value === "valid") {
    return "mdi-check";
  } else if (cpfStatus.value === "invalid") {
    return "mdi-close";
  } else {
    return "mdi-help-circle";
  }
});

const cpfStatusColor = computed(() => {
  if (cpfStatus.value === "valid") {
    return "green";
  } else if (cpfStatus.value === "invalid") {
    return "red";
  } else {
    return "grey";
  }
});

function validateCPF() {
  // Realizar validação do CPF (pode ser feito com uma API externa ou uma validação local)
  // Exemplo de validação local simples (apenas para fins de demonstração):
  const regex = /^\d{11}$/;
  if (regex.test(cpf.value)) {
    cpfStatus.value = "valid";
  } else {
    cpfStatus.value = "invalid";
  }
}

function goToStep(step) {
  // Ir para o próximo passo (etapa)
  router.push(`/step${step}`);
}

function cancel() {
  // Redirecionar para a página de listagem de pessoas
  router.push("/gallery");
}
</script>
