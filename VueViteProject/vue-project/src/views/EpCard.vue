<template>
    <!-- 简单卡片 -->
    <el-col :span="10">
        <el-card>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List Item' + o }}</div>
        </el-card>
    </el-col>
    <br>

    <!-- 完整卡片 -->
    <el-col :span="10">
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <el-button type="info">Operation</el-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            <template #footer>Footer content</template>
        </el-card>
    </el-col>
    <br>

    <!-- 图文卡片 -->
    <el-col :span="10">
        <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="box">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="info" >Operating</el-button>
                </div>
            </div>
        </el-card>
    </el-col>
    <br>

    <!-- 卡片阴影效果 shadow属性值为 always hover never-->
    <el-row :gutter="12">
        <el-col :span="8">
            <el-card shadow="always"> Always </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="hover"> Hover </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="never"> Never </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>
<style scoped>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.button{
    padding: 0;
    min-height: auto;
}

.time {
    font-size: 12px;
    color: #999;
}

.box {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
    width: 100%;
    display: block;
}
</style>