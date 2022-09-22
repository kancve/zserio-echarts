import Vue from 'vue'
import axios from 'axios'
import config from '../../vue.config.js'

axios.defaults.baseURL=config.publicPath

Vue.prototype.$axios = axios