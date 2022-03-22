//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// import { Button, DatePicker} from 'element-ui';

// Vue.component(Button.name, Button);
// Vue.component(DatePicker.name, DatePicker);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */


//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
	el: '#app',
	render: (h) => h(App),
})
