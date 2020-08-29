import Home from '../pages/home';
import User from '../pages/user';
import Detail from '../pages/detail';

const routes = [
    {
        path:'/:tab?',
        name:'首页',
        exact:true,
        component:Home
    },
    {
        path:'/detail/:id?',
        name:'文章详情',
        exact:true,
        component:Detail
    },
    {
        path:'/user/:loginname?',
        name:'用户详情',
        exact:true,
        component:User
    }
];

export default routes;