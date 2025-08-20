<script setup>
//写js代码逻辑的位置
    import { ref } from "vue"
    const msg = ref("Hello Vue!!!")
    const fcolor = ref("color:blue")
    function changeFontColor(){
        fcolor.value = "color:red;"
    }
</script>

<template>
    <!-- 写UI结构 -->
     <p :style="fcolor">{{ msg }}</p>
     <p><button @click="changeFontColor">修改字体颜色</button></p>
</template>

<style scoped>
/* 写样式，scoped让当前样式只在当前组件作用域中生效 */
    p{
        font-size: 50px;
    }
    button{
        font-size: 30px;
    }
</style>