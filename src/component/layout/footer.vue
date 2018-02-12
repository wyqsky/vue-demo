<template>
    <div class="footerBar" v-show="isFooter">
        <ul class="box">
            <router-link tag="li" :to="item.path" v-for="(item, index) in footerBarList" :class="{'active': ($route.matched[0].path || $route.matched[1].path) === item.path}" :key="index">
                <i class="myicon" :class="(iconType && ($route.matched[0].path || $route.matched[1].path) === item.path) ? iconType :item.class"></i>
                <div>{{item.title}}</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'footerBar',
    data () {
        return {
            footerBarList: [
                {path: '/index', title: '首页', class:'icon-shouye'},
                {path: '/activity', title: '活动', class:'icon-cart'},
                {path: '/find', title: '发现', class:'icon-zan'},
                {path: '/my', title: '我的', class:'icon-geren'}
            ]
        }
    },
    props: {
        iconType: {
            type: String,
            default: 'icon-shouyefill'
        },
        isFooter: {
            type: Boolean,
            default: true
        }
    },
    created(){

    },
    methods: {

    },
    watch: {
        $route(to, from){

        }
    }
}
</script>

<style lang="scss" scoped>
.footerBar{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 48px;
    border-top: 1px solid #c1c1c1;
    background-color: rgba(255,255,255,0.9);
    .box{
        width: 100%;
        display: flex;
        li{
            flex: 1;
            text-align: center;
            &.active{
                color: #62b900;
            }
            i{
                font-size: 1.8rem;
            }
            div{
                font-size: 0.8rem;
                line-height: 16px;
            }
        }
    }
}
</style>
