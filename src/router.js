import {createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: ProjectsList,
        },
        {
            // /:slug cause slug is dynamic
            path: '/portfolio/:slug', 
            name: 'project',
            component: SingleProject,
        },
    ]
});

export {router};