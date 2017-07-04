import VueRouter from 'vue-router'
import Vue from 'vue'
const nameSpace = require('src/common/utils/nameSpace')

Vue.use(VueRouter)

nameSpace ('CB', "router")
nameSpace ('COMMON', "router")

const router = window.CB.router = window.COMMON.router = new VueRouter();

module.exports = router
