<template>
    <div class="app-wrapper">
        <keep-alive>
            <router-view class="main-container"></router-view>
        </keep-alive>
        <Footer :icon-type="iconType"></Footer>
    </div>
</template>

<script>
import Footer from './footer';

export default {
    name: 'layout',
    components: {
        Footer
    },
    data(){
        return {
            iconType: 'icon-shouyefill'
        }
    },
    created(){

    },
    watch: {
        $route(to, from){
            this.iconType = to.matched[0].meta.iconType || to.matched[1].meta.iconType;
        }
    }
}
</script>
<style lang="scss" scoped>
    .app-wrapper {
        width: 100%;
        height: 100%;
    }
    .main-container {
        width: 100%;
        height: 100%;
        position: relative;
    }
    
</style>