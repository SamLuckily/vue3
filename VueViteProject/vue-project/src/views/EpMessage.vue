<script setup>
    import { ElMessage } from 'element-plus';
    const show = ()=>{
        ElMessage("这是一个消息提示框弹出的提示信息")
    }
    const open1 = () => {
        // 默认样式
        ElMessage('this is a message.')
    }
    const open2 = () => {
        ElMessage({
            // 成功样式
            message: 'Congrats, this is a success message.',
            type: 'success',
        })
    }
    const open3 = () => {
        ElMessage({
            // 警告样式
            message: 'Warning, this is a warning message.',
            type: 'warning',
            duration: 3000,
            showClose: true
        })
    }
    const open4 = () => {
        // 错误样式，使用 ElMessage.error 函数弹出
        ElMessage.error('Oops, this is a error message.')
    }

</script>
<template>
        <el-button @click="show">弹出消息</el-button>
        <div>
            <el-button type="info" @click="open1">message</el-button>
            <el-button type="success" @click="open2">success</el-button>
            <el-button type="warning" @click="open3">warning</el-button>
            <el-button type="danger" @click="open4">error</el-button>
        </div>

</template>