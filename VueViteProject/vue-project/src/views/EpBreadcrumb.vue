<script setup>
    import { ArrowRight } from '@element-plus/icons-vue';

</script>
<template>
    <el-breadcrumb separator="、">
        <el-breadcrumb-item :to="{path: '/home'}">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/home/vue'}">Vue</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/home/vue/elementplus'}">ElementPlus</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/home/vue/elementplus/breadcrumb'}">Breadcrumb</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 图标分隔符 -->
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item ><a href="/home">Home</a></el-breadcrumb-item>
        <el-breadcrumb-item ><a href="/home/vue">Vue</a></el-breadcrumb-item>
        <el-breadcrumb-item ><a href="/home/vue/elementplus">ElementPlus</a></el-breadcrumb-item>
        <el-breadcrumb-item ><a href="/home/vue/elementplus/breadcrumb">Breadcrumb</a></el-breadcrumb-item>

    </el-breadcrumb>
</template>