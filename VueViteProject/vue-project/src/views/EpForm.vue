<script setup>
    import {ref} from "vue"
    const data = ref({user:"", passwd: ""})
    const onsubmit = ()=>{
        console.log(data.value)
    }

</script>
<template>
    <!-- <el-form :inline=true :model="data"> -->
    <el-form :model="data" style="width: 300px;" label-width="80px" label-position=left>
        <el-form-item label="用户名:">
            <el-input v-model="data.user" placeholder="请输入用户有名" clearable/>
        </el-form-item>
        <el-form-item label="密码:">
            <el-input v-model="data.passwd" type="password" placeholder="请输入密码" clearable/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onsubmit">提交</el-button>
        </el-form-item>

    </el-form>

</template>