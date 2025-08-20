import { createRouter, createWebHashHistory } from "vue-router";
import Ceshiren from "@/views/Ceshiren.vue";
import Hogwarts from "@/views/Hogwarts.vue";
import NotFouond from "@/views/NotFouond.vue";
import User from "@/views/NestedUser.vue";
import Child from "@/views/NestedChild.vue";
import Redirect from "@/views/Redirect.vue";
import Alias from "@/views/Alias.vue";
import Params from "@/views/Params.vue";
import Search from "@/views/Search.vue";
import CodeChild from "@/views/CodeChild.vue";
import CodeHome from "@/views/CodeHome.vue";
import ProtectHome from "@/views/ProtectHome.vue";
import ProtectAbout from "@/views/ProtectAbout.vue";
import ProtectNews from "@/views/ProtectNews.vue";

// 创建一个路由关系表
const routers = [
    {
        path: "/",
        component: Ceshiren
    },
    {
        path: "/ceshiren",
        component: Ceshiren
    },
    {
        path: '/user/:id(\\d+)/:name([a-z]+)',
        component: Hogwarts
    },
    {
        path: "/user",
        name: "hoguser",
        component: User,
        children: [{
            path: "child/:id/:name",
            name: "hogchild",
            component: Child

        }]
    },
    {
        path: "/macbookpro",
        // redirect: {path:"/redirectpage"}
        redirect: { name: "rp" }
    },
    {
        path: "/redirectpage",
        name: "rp",
        component: Redirect
    },
    {
        path: "/alias",
        // alias: "/aliasname",
        alias: ["/an1", "/an2", "/an3"],
        component: Alias
    },
    {
        path: "/codehome",
        component: CodeHome,
        children: [
            {
                path: "codechild",
                name: "codechild",
                component: CodeChild
            }
        ]
    },
    {
        path: "/params/:userId",
        name: "userWithParam",
        component: Params
    },
    {
        path: "/search",
        name: "search",
        component: Params
    },
    {
        path: "/phome",
        name: "phome",
        component: ProtectHome
    },
    {
        path: "/pabout",
        name: "pabout",
        component: ProtectAbout
    },
    {
        path: "/pnews",
        name: "pnews",
        component: ProtectNews
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFouond
    }
]

//创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
//添加路由守卫
router.beforeEach((to, from) => {
    console.log("BeforEach -- From:", "To:", to)
    // return false
    // return {path: "/"}
    // if (to.name != "phome")
    //     return {name: "phome"}
})
router.beforeResolve((to, from)=>{
    console.log("beforeResolve -- From:",from, "To:", to)
})
router.afterEach((to, from)=>{
    console.log("afterEach -- From:",from, "To:", to)
    return "/phome"
})


export default router