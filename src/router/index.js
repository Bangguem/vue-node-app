import { createRouter, createWebHistory } from 'vue-router';
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import RequestPasswordReset from '@/components/RequestPasswordReset.vue';
import ResetPassword from '@/components/ResetPassword.vue';
import FindPassword from '@/components/FindPassword.vue';
import FindId from '@/components/FindId.vue';
import MypageEdit from '@/components/MypageEdit.vue';

const routes = [
    {
        path: '/signup',
        name: 'Signup',
        component: SignupForm,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginForm,
    },
    { path: '/request-password-reset', component: RequestPasswordReset },
    { path: '/reset-password', component: ResetPassword },
    {path: '/find-password', component: FindPassword},
    {path:'/find-id', component: FindId},
    {path:'/mypage-edit', component: MypageEdit}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;