import Vue from 'vue';
import Main from './Main.vue'
import router from './router';
import 'bootstrap';
import VueMeta from 'vue-meta'

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(VueMeta)

new Vue({
    el: '#app',
    router,
    render: h => h(Main)
});
