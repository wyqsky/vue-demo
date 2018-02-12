<template>
    <div class="_header app">
        <span @click="back">返回</span>
    </div>
</template>

<script>
export default {
    name: 'headerBar',
    components: {

    },
    data () {
        return {

        }
    },
    methods: {
        back(){
            this.$router.animate = 2;
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
._header{
    height: 40px;
    line-height: 40px;
    background: #ccc;
    span{
        float: left;
    }
}
</style>
