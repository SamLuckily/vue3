<template>
    <div>
        <button @click="handleGetRequest">发起 GET 请求</button>
        <button @click="handlePostRequest">发起 POST 请求</button>
    </div>
</template>
<script setup>

// GET 请求
const handleGetRequest = () => {
    // 通过 window 对象中挂载的 api 实例调用请求方法
    window.$api.get('/get', {params:{id:"123"}})
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    }); 
}

// POST 请求
const handlePostRequest = () => {
    // 简化使用，可直接使用 $api 变量访问 
    $api.post('/post', {id:"123","name":"tom"})
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
}
</script>