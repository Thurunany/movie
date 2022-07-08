import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import api from "../services/api"

Vue.use(Vuetify);
Vue.prototype.$http = api;

export default new Vuetify({
});
