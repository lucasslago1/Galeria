import { createStore } from "vuex";

const store = createStore({
  state: {
    currentStep: 1,
    imageUrl: "",
    biography: "",
  },
  mutations: {
    setCurrentStep(state, step) {
      state.currentStep = step;
    },
    setImageUrl(state, url) {
      state.imageUrl = url;
    },
    setBiography(state, bio) {
      state.biography = bio;
    },
  },
  actions: {
    updateCurrentStep({ commit }, step) {
      commit("setCurrentStep", step);
    },
    updateImageUrl({ commit }, url) {
      commit("setImageUrl", url);
    },
    updateBiography({ commit }, bio) {
      commit("setBiography", bio);
    },
  },
});

export default store;
