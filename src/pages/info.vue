<template>
    <div class="info app">
        <head-bar></head-bar>
        <h3 @click="open">点击弹出上拉弹窗</h3>
        <h3 @click="setting">点击跳到设置页</h3>
        <div class="mask" :class="{animateTop: animate}">
            <span @click="close">X</span>
        </div>
    </div>
</template>

<script>
import headBar from '../component/layout/headBar';
export default {
    name: 'info',
    components: {
        headBar
    },
    data () {
        return {
            animate: false
        }
    },
    methods: {
        open(){ 
            this.animate = true
        },
        close(){
            this.animate = false
        },
        setting(){
            // 当前路由不记入历史
            // this.$router.replace('/setting');
            this.$router.push('/setting');
        }
    }
}
</script>

<style lang="scss" scoped>
.info{
    .mask{
        position: absolute;
        top: 100%;
        width: 100%;
        height: 100%;
        background: #c1c1c1;
        transition: top 0.4s ease;
    }
    .animateTop{
        top: 0;
    }
}

</style>
