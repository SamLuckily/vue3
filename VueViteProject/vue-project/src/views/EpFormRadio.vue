<template>
    <!-- 基础使用  -->
    <el-radio v-model="radioNoraml" label="1"></el-radio>
    <el-radio v-model="radioNoraml" label="2"></el-radio>
    <br>

    <!-- 禁用状态 使用 disabled 属性-->
    <el-radio v-model="radioDisable" disabled label="disabled">Option A</el-radio>
    <el-radio v-model="radioDisable" disabled label="selected and disabled">Option B</el-radio>
    <br>

    <!-- 单选框组 -->
    <el-radio-group v-model="radioNoramlLarge">
        <el-radio label="1" size="large">Option 1</el-radio>
        <el-radio label="2" size="large">Option 2</el-radio>
    </el-radio-group>
    <br>

    <!-- 按钮样式组 -->
    <el-radio-group v-model="radios" @change="handleRadio">
        <el-radio-button :label="3">Option A</el-radio-button>
        <el-radio-button :label="6">Option B</el-radio-button>
        <el-radio-button :label="9">Option C</el-radio-button>
    </el-radio-group>
</template>
<script setup>
    import { ref } from 'vue'
    const radioNoraml = ref('1')
    const radioNoramlLarge = ref('1')
    const radioDisable = ref('selected and disabled')
    const radios = ref(3)
    const handleRadio = (val)=>{
        console.log(val)
    }
</script>