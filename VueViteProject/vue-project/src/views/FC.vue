<script setup>
    import SC from './SC.vue'
    import {ref} from "vue"
    const content = ref("这是父组件传递给子组件的动态数据")
    function change(){
        content.value = "content 数据被父组件改变了"
    }
</script>

<template>
    <h1>这是父组件自己的内容</h1>
    <p>分割线下面的内容为子组件的内容</p>
    <p> Content:{{ content }}</p>
    <button @click="change">修改父组件中的content内容</button>
    <hr>
    <SC/>
    <hr>
    <SC title="这是只给title的子组件使用方式"></SC>
    <hr>
    <SC title="这是只给title的子组件使用方式":content="content"></SC>
</template>