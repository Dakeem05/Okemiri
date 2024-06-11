import {createWebHistory, createRouter} from 'vue-router';
import Home from "./Pages/Home.vue";


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component:Home, name:'Home'},
        {
            path: '/:catchAll(.*)',
            component: '../index.html', // Specify the path to your index.html file
          },
    ]
});

export default router;