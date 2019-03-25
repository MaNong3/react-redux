import Music from "view/music";
import Rank from "view/music/rank";
import TopList from "view/music/toplist";
import Search from "view/music/search";
import Location from "view/location";
import Login from "view/login";
import User from "view/login/user";
import Registry from "view/registry";
const routes = [{
    path: "/music",
    component: Music,
    children: [{
        path: "/music/rank",
        component: Rank
    }, {
        path: "/music/toplist",
        component: TopList
    }, {
        path: "/music/search",
        component: Search
    }]
}, {
    path: "/location",
    component: Location
},
{
    path: "/login",
    component: Login
}, {
    path: "/login/:user",
    component: User
}, {
    path: "/registry",
    component: Registry
}]
export default routes;