<template>
    <!-- 基础用法 -->
    <div>
        <el-avatar :size="100" :src="state.circleUrl" />
    </div>
    <div v-for="size in state.sizeList" :key="size">
        <el-avatar :size="size" :src="state.circleUrl" />
    </div>
    <!-- 圆角距形头像 -->
    <div>
        <el-avatar shape="square" :size="50" :src="state.squareUrl" />
    </div>
    <div v-for="size in state.sizeList" :key="size">
        <el-avatar shape="square" :size="size" :src="state.squareUrl" />
    </div>
    <!-- 文字头像 -->   
    <div>
        <el-avatar> user </el-avatar>
    </div>
    <!-- 图片头像 -->
    <div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </div>
    <!-- 图标头像 -->
    <div>
      <el-avatar :icon="UserFilled" />
    </div>
    <!-- 回退行为  图片加载失败时的回退行为 -->
    <div class="demo-type">
        <el-avatar :size="60" src="https://empty" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
    </div>
</template>
<script  setup>
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
const errorHandler = ref(true)
const state = ref({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['small', '', 'large'],
})
</script>