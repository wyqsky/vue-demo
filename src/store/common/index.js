import * as type from '../type'

const state = {
    isLoading: false,
    isFooter: false,
    testData: {
        name: '123'
    }
}

const getters = {
    isLoading: state => state.isLoading
}

const actions = {
    getIsLoading({commit}, params) {
        commit(type.IS_LOADING, params)
    },
    getIsFooter({commit}, params) {
        commit(type.IS_FOOTER, params)
    }
}

const mutations = {
    [type.IS_LOADING] (state, info) {
        state.isLoading = info
    },
    [type.IS_FOOTER] (state, info) {
        state.isFooter = info
    }
}
    
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}