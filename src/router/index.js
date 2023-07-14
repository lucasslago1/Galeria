import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ImageGallery from "../components/ImageGallery";
import CadastroView from "../views/CadastroView.vue";
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/gallery",
    component: ImageGallery,
  },
  {
    path: "/cadastro",
    name: "home",
    component: CadastroView,
  },
  {
    path: "/step1",
    component: StepOne,
  },
  {
    path: "/step2",
    component: StepTwo,
  },
  {
    path: "/step3",
    component: StepThree,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
