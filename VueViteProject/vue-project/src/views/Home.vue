<script setup>
    const toCodeHome = (router)=>{
        //使用字符串作为路由参数
        router.push("/codehome")
    }
    function toCodeChild(router){
        //使用对象作为路由参数
        router.push({path: "/codehome/codechild"})
    }
    function toHomeNameWithParams(router){
        //使用命名路由并带参数
        router.push({name: "userWithParam", params:{userId: 123123}})
    }
    function searchSomething(router){
        //使用命名路由并携带查询参数
        router.push({name: "search", query: {kw:"今天吃点啥"}})
    }
    const goFroward = (router) => {
        router.go(1);
    };
    const goBack = (router) => {
        router.go(-1);
    };
    const replaceNow=(router)=>{
        // router.replace("/ceshiren")
        router.push({path:"/ceshiren", replace:true})
    }

</script>
<template>
    <div>
        <h1>Home Page</h1>
        <p>
            <button @click="toCodeHome($router)">
            点击跳转到 toCodeHome 的路由地址
            </button>
        </p>
        <p>
            <button @click="toCodeChild($router)">
            点击跳转到 path 为 /codehome/codechild 的路由地址
            </button>
        </p>
        <p>
            <button @click="toHomeNameWithParams($router)">
            点击跳转到 name 为 userWithParam 且包含参数的路由地址
            </button>
        </p>
        <p>
            <button @click="searchSomething($router)">
            点击跳转到 name 为 search 且包含查询参数的路由地址
            </button>
        </p>
        <p>
            <button @click="goFroward($router)" class="box">点击进入下一个页面</button>
            <button @click="goBack($router)" class="box">点击后退一页</button>
        </p>
        <p><button @click="replaceNow($router)">替换路由到 Ceshiren 页面 </button></p>
        <!-- 路由出口 -->
        <router-view></router-view>

    </div>
</template>
<style scoped>
    .box{
        margin-right: 20px
    }

</style>