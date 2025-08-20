<template>
    <!-- 基础用法 -->
    <el-input v-model="inputNormal" placeholder="请输入内容"> </el-input>
    <el-divider />

    <!-- 禁用状态 -->
    <el-input v-model="inputUn" disabled placeholder="输入框禁用状态"></el-input>
    <el-divider />

    <el-input v-model="inputClear" placeholder="请输入内容，输入框可一键清空" clearable></el-input>
    <el-divider />

    <!-- 密码框 -->
    <el-input v-model="inputPwd" type="password" placeholder="请输入密码" show-password />
    <el-divider />

    <!-- 带图标的输入框 -->
    <el-input v-model="inputIconDate" placeholder="请选择日期" :suffix-icon="Calendar" />

    <el-input v-model="inputIconSearch" placeholder="请输入搜索的内容" :prefix-icon="Search" />
    <el-divider />

    <!-- 文本域 -->
    <el-input v-model="inputTextarea" :rows="2" type="textarea" placeholder="Please input" />
    <el-input v-model="inputTextarea2" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="Please input" />
    <el-divider />

    <!-- 复合型输入框 -->
    <el-input v-model="inputStart1" placeholder="Please input">
        <template #prepend>http://</template>
    </el-input>

    <el-input v-model="inputStart2" placeholder="Please input">
      <template #append>.com</template>
    </el-input>

    <el-input v-model="inputStart3" placeholder="Please input">
        <template #prepend>http://</template>
        <template #append>.com</template>
    </el-input>

  </template>

  <script setup>
    import {ref} from 'vue'
    import { Calendar, Search } from '@element-plus/icons-vue';
    const inputNormal = ref('asdfasdf')
    const inputUn = ref('')
    const inputClear=ref('')
    const inputPwd=ref('')
    const inputIconDate=ref('')
    const inputIconSearch=ref('')
    const inputTextarea = ref('')
    const inputTextarea2=ref('')
    const inputStart1=ref('')
    const inputStart2=ref('')
    const inputStart3=ref('')
  </script>