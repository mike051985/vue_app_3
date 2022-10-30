const Home = { template: '<component-home></component-home>' }
const Login = { template: '<login-form></login-form>' }
const Register = { template: '<register-form></register-form>' }
const Reset = { template: '<reset-form></reset-form>' }

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Register },
    { path: '/reset', component: Reset }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
})

const app = Vue.createApp({})

app.use(router)


app.mount('#app')