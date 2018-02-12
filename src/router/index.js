import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
VueRouter.prototype.animate = 0;

const Index = () => import(/* webpackChunkName: "index-test" */ '../pages/index.vue');
const Index_home = () => import(/* webpackChunkName: "index-test" */ '../component/layout/index.vue');
const Activity = () => import(/* webpackChunkName: "index-test" */ '../pages/activity.vue');
const My = () => import(/* webpackChunkName: "index-test" */ '../pages/my.vue');
const Info = () => import(/* webpackChunkName: "index-test" */ '../pages/info.vue');
const Setting = () => import(/* webpackChunkName: "index-test" */ '../pages/setting.vue');
const Find = () => import(/* webpackChunkName: "index-test" */ '../pages/find.vue');

const routerList = [
    {
        path: '/', 
        name: '首页', 
        meta: {iconType: 'icon-shouyefill'},
        component: Index_home,
        redirect: '/index',
        children: [
            { path: 'index', component: Index, name: '首页' }
        ]
    },
    {
        path: '/activity',  
        meta: {iconType: 'icon-gouwuche1'},
        component: Index_home,
        redirect: '/',
        children: [
            { path: '/', component: Activity, name: '活动' }
        ]
    },
    {
        path: '/find',  
        meta: {iconType: 'icon-zanfill'},
        component: Index_home,
        redirect: '/',
        children: [
            { path: '/', component: Find, name: '发现' }
        ]
    },
    {
        path: '/my',  
        meta: {iconType: 'icon-geren2'},
        component: Index_home,
        redirect: '/',
        children: [
            { path: '/', component: My, name: '我的' }
        ]
    },

    {path: '/info', name: 'info', component: Info, meta: {slide: 1}},
    {path: '/setting', name: 'setting', component: Setting, meta: {slide: 1}}
    
];

const router = new VueRouter({
    routes: routerList
});

router.beforeEach((to, from, next)=>{
    next();
})

router.afterEach((to, from)=>{
    if (to.path === '/index' || to.path === '/my' || to.path === '/activity'){
        return;
    }
})

export default router;
