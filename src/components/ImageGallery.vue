<template>
  <v-card class="mx-5 my-2 pa-3">
    <v-row v-if="paginatedItems.length > 0">
      <v-col
        v-for="(item, index) in paginatedItems"
        :key="index"
        cols="4"
        sm="3"
        md="2"
        lg="1"
      >
        <v-card>
          <v-img
            :src="`https://picsum.photos/500/300?image=${item * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${item * 5 + 10}`"
            aspect-ratio="1"
            cover
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <p>No items available.</p>
      </v-col>
    </v-row>
    <v-pagination
      v-model="currentPage"
      :total-visible="5"
      :length="Math.ceil(totalItems / itemsPerPage)"
      @input="paginateItems"
    ></v-pagination>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";

const currentPage = ref(1);
const itemsPerPage = 50;
const totalItems = 200;

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return Array.from({ length: itemsPerPage })
    .map((_, index) => startIndex + index + 1)
    .filter((item) => item <= totalItems);
});

function paginateItems(page) {
  currentPage.value = page;
}
</script>
