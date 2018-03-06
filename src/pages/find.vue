<template>
    <div class="find app">
        <h3>发现</h3>
        <input type="text" v-model="testData.name">
        <!-- <Footer icon-type="icon-zanfill"></Footer> -->
        <button @click="btn">点击</button>
    </div>
</template>

<script>
import Footer from '../component/layout/footer';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'find',
    components: {
        Footer
    },
    data () {
        return {

        }
    },
    created(){
        this.getIsFooter(true)
    },
    computed: {
        ...mapState('common', {
            testData: 'testData'
        })
    },
    methods: {
        ...mapActions('common', {
            getIsFooter: 'getIsFooter'
        }),
        btn(){
            console.log('当前',this.testData.name)
            this.$router.push('/info');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
