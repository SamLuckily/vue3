<script setup>
    // 在使用图标位置导入图标名
    import {
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
        Share,
    } from '@element-plus/icons-vue'
</script>
<template>
    <!-- 直接使用 -->
    <div>
        <Edit/>
        <Delete/>
        <Message/>
        <Check/>

    </div>
    <!-- 由于SVG图标默认不携带任何属性,需要设置显示样式 -->
    <Edit style="width: 16px; height: 16px; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
    <!-- 从父元素中获取属性 -->
    <div style="font-size: 20px">
        <Edit style="width: 1em; height: 1em; margin-right: 8px" />
        <Delete style="width: 1em; height: 1em; margin-right: 8px" />
        <Search style="width: 1em; height: 1em; margin-right: 8px" /> 
    </div>
    <div>
        <!-- 设置图标大小与颜色 -->
        <el-icon size="30" color="#409EFC">
            <Edit />
        </el-icon>

        <!-- 使用响应式变量设置图标大小与颜色 -->
        <el-icon :size="size" :color="color">
            <Edit />
        </el-icon>
    </div>
    <el-button :icon="Search"  />
    <el-button type="primary" :icon="Edit"  />
    <el-button type="success" :icon="Check" round />
    <el-button type="info" :icon="Message" round />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
</template>