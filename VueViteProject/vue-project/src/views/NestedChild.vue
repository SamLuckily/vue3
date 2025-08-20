<template>
    <div>
        <h2>HogChild</h2>
        <p>这是子页面内容</p>
        <p>这是子页面内容</p>
        <p>这是子页面内容</p>
        <p>这是子页面内容</p>
        <p>ID：{{ route.params.id }}</p>
        <p>NAME：{{ route.params.name }}</p>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>