<!-- 子组件 -->
 <script setup>
defineProps(["title", "content"])
</script>
<template>
    <div>
        <h3> {{ title }}</h3>
        <p> {{ content }}</p>
    </div>
</template>