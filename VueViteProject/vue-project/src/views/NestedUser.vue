<template>
    <div>
        <h2>这是父页面标题</h2>
        <router-link to="/user/child" class="box">通过URL进入到子页面</router-link>
        <router-link :to="{name: 'hogchild', params:{id:11, name:'tom'}}" class="box">通过Name进入到子页面</router-link>
        <router-view></router-view>
    </div>
</template>
<style>
    .box{
        margin-right: 20px;
    }
</style>