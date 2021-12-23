import { createRouter, createWebHashHistory } from 'vue-router'

import InitialPage from "../components/InitialPage.vue";
import SubjectsMenu from "../components/SubjectsMenu.vue";
import ItemsMenu from "../components/ItemsMenu.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: InitialPage
  },
  {
    path: '/:BlockId',
    name: 'Subjects Menu',
    component: SubjectsMenu
  },
  {
    path: '/:BlockId/:Subject',
    name: 'Items Menu',
    component: ItemsMenu
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
