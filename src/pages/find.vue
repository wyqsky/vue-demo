<template>
    <div class="find app">
        <h3>发现</h3>
        <!-- <Footer icon-type="icon-zanfill"></Footer> -->
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

    },
    methods: {
        ...mapActions('common', {
            getIsFooter: 'getIsFooter'
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
