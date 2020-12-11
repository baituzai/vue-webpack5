import Vue from "vue"
import App from "./App.vue"

// new Vue({
//   el: "#app",
//   render: (h) => h(App),
// })
// 两种方法都可以
new Vue({
  render: (h) => h(App),
}).$mount("#app")
