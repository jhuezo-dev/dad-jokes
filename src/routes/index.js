import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/layout',
    name: 'Layout',
    redirect: '/',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/jokes',
        name: 'Jokes',
        component: () => import('@/views/Jokes.vue')
      },
      {
        path: '/jokes/:id',
        name: 'Joke',
        component: () => import('@/views/Joke.vue')
      },
    ]
  }
]

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

export default router;