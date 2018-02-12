import Vue from 'vue'
import LoadingComponent from './loading.vue'


//extend 是构造一个组件的语法器.传入参数，返回一个组件
let LoadingConstructor = Vue.extend(LoadingComponent);

let initComponent = new LoadingConstructor();
initComponent.$mount(document.createElement("div"));
document.body.appendChild(initComponent.$el);

export const showLoading = () => {
    initComponent.isHide = true
}

export const hideLoading = (option) => {
    initComponent.isHide = false;
}