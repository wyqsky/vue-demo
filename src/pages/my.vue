<template>
    <div class="my app">
        <h3 @click="my">点击跳到个人信息页</h3>
        <!-- <Footer icon-type="icon-geren2"></Footer> -->
    </div>
</template>

<script>
import Footer from '../component/layout/footer';
export default {
    name: 'my',
    components: {
        Footer
    },
    data () {
        return {

        }
    },
    methods: {
        my(){
            this.$router.push('/info');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
