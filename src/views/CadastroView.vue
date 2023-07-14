<template>
  <v-app>
    <v-main>
      <component :is="currentStepComponent"></component>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";

const currentStep = ref(1);

const currentStepComponent = computed(() => {
  switch (currentStep.value) {
    case 1:
      return StepOne;
    case 2:
      return StepTwo;
    case 3:
      return StepThree;
    default:
      return null;
  }
});
</script>
