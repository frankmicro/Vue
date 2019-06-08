import VueRouter from 'vue-router';
import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Header from './components/Header.vue'

export const routes = [
  {
    path: '',
    name: 'login',
    components: {
      default: Login
    }
  },
    {path:'/home', name:'home', components:{
        default:Home,
        'header-top':Header
    }},
    {path:'/user', name:'users', components:{
        default:User,
        'header-top':Header
    }, children:[
        {path:'', component:UserStart, name:'usersPage'},
        {path:':id', component:UserDetail, name:'usershow'},
        {path:':id/edit', component:UserEdit, name:'userEdit'},
    ]},
    {
      path: '/redirect-me',
      redirect: {
        name: 'users'
      }
    },
    {path:'*',redirect:'/'}
]

export default new VueRouter({
  routes,
  mode:'history'
});
