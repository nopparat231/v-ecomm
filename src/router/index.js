import { createRouter, createWebHistory, } from 'vue-router'
import Content from '../components/Content.vue'
import Pdetail from '../components/Pdetail.vue'
import Home from '../components/Home.vue'
import NotFoundVue from '../components/NotFound.vue';

const routes = [

    {
        path: "/",
        name: "Content",
        component: Content
    },
    {
        path: "/Home",
        name: "Home",
        component: Home
    },
    {
        path: "/Pdetail/:id",
        name: "Pdetail",
        component: Pdetail
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFoundVue
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router



