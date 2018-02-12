<template>
    <div class="index app">
        <h3>hello</h3>
        <ul class="index_ul">
            <li v-for="item in articleList" :key="item._id">
                <h3>{{item.title}}</h3>
                <div>{{item.describe}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import api from './api';
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    name: 'index',
    components: {

    },
    data () {
        return {
            articleList: []
        }
    },
    async created(){
        const list = await api.articleList();
        this.articleList = list.list;
    },
    computed: {
        ...mapState('common', {
            isLoading: 'isLoading'
        }),
        ...mapGetters('common', {
            isLoading_2: 'isLoading'
        })
    },
    methods: {
        ...mapActions('common', {
            getIsLoading: 'getIsLoading'
        }),
        ...mapMutations('common', {
            _isLoading: 'IS_LOADING'
        })
    }
}
</script>

<style lang="scss" scoped>
.index{
    height: auto;
    .index_ul{
        li{
            border: 1px solid #c1c1c1;
            border-radius: 5px;
            margin: 10px;
            &:last-child{
                margin-bottom: 48px;
            }
        }
    }
}
</style>
