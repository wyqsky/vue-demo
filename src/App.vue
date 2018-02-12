<template>
    <div id="app">
        <transition :name='animate'>
            <router-view class="child-view"></router-view>  
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "app",
    components: {

    },
    data() {
        return {
          animate: ''
        };
    },
    created(){

    },
    computed: {
        ...mapState('common', {
            isFooter: 'isFooter'
        })
    },
    watch: {
      $route(to, from) {
          /*
              0: 不做动画
              1: 左切换
              2: 右切换
              3: 上切换
              4: 下切换
                */
          let animate = this.$router.animate || to.meta.slide;
          if (!animate) {
              this.animate = "";
          } else {
              this.animate =
                  animate === 1
                      ? "slide-left"
                      : animate === 2
                        ? "slide-right"
                        : animate === 3
                          ? "slide-top"
                          : animate === 4 ? "slide-bottom" : "";
          }
          this.$router.animate = 0;
      }
    },
    methods: {

    }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
li{
  list-style: none;
}
.app{
  height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-bottom-leave-active,
.slide-top-enter-active,
.slide-bottom-leave-active,
.slide-top-enter-active{
  position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    transition: all 0.5s ease;
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}



.slide-top-enter,
.slide-bottom-leave-active {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
}

.slide-top-leave-active,
.slide-bottom-enter {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
}
</style>
