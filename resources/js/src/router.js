import { createRouter, createWebHistory } from "vue-router";

// Lazy Loading [Will load when first called. Then will be stored in cache memory]

// Views
const index = () => import("./views/IndexPage.vue");


const routes = [
    {
        path: "/",
        component: index,
    },

    // {
    //     path: "/",
    //     component: index,
    //     children: [
    //         {
    //             path: "",
    //             name: "home",
    //             component: Home,
    //             meta: { role: [0] },
    //         }
    //     ],
    // }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;