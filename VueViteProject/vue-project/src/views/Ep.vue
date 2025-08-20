<script setup>
    import {ref} from "vue"
    const message = ref("Hello Element Plus")

</script>
<template>
    <el-button type="primary" plain> {{ message }}</el-button>
    <el-button type="success" plain> {{ message }}</el-button>
    <el-button type="info" plain> {{ message }}</el-button>
    <button> {{ message }}</button>

</template>