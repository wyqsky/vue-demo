<template>
    <div class="setting app">
        <head-bar></head-bar>
        <h3>设置页</h3>
    </div>
</template>

<script>
import headBar from '../component/layout/headBar';
export default {
    name: 'setting',
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
        }
    }
}
</script>

<style lang="scss" scoped>
.setting{

}

</style>
