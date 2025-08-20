<template>
    <div>
        <h2>Hogwarts</h2>
        <p>路径参数为ID：{{ route.params.id}}</p>
        <p>路径参数为Name：{{ route.params.name}}</p>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
