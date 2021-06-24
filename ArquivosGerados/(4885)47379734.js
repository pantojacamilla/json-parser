    import Vue from 'vue'&#xD;&#xA;    import App from './App'&#xD;&#xA;    import router from './router'&#xD;&#xA;    import AuthStorage from './AuthStorage.js'&#xD;&#xA;    Vue.config.productionTip = false&#xD;&#xA;    Vue.use(AuthStorage)&#xD;&#xA;    router.beforeEach((to, from, next) => {&#xD;&#xA;      if (to.matched.some(record => record.meta.requireAuth)) {&#xD;&#xA;        if (!Vue.$authStorage.getToken()) {&#xD;&#xA;          next({&#xD;&#xA;            path: '/',&#xD;&#xA;            query: { redirect: to.fullPath }&#xD;&#xA;          })&#xD;&#xA;        } else {&#xD;&#xA;          next()&#xD;&#xA;        }&#xD;&#xA;      } else {&#xD;&#xA;        next()&#xD;&#xA;      }&#xD;&#xA;    })&#xD;&#xA;    axios.defaults.headers.common = {&#xD;&#xA;      'Authorization': `Bearer ${Vue.$authStorage.getToken()}`&#xD;&#xA;    }&#xD;&#xA;    /* eslint-disable no-new */&#xD;&#xA;    new Vue({&#xD;&#xA;      el: '#app',&#xD;&#xA;      router,&#xD;&#xA;      template: '<App/>',&#xD;&#xA;      components: { App }&#xD;&#xA;    })