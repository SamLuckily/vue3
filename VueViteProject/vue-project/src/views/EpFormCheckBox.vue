<template>
    <!-- 基础用法 -->
    <div>
        <el-checkbox v-model="checkedNomarl1" label="Option Large" size="large" />
        <el-checkbox v-model="checkedNomarl2" label="Option Normar" />
        <el-checkbox v-model="checkedNomarl3" label="Option Small" size="small" />
    </div>

    <!-- 禁用状态 使用 disabled 属性 -->
    <el-checkbox v-model="checkedDisable" disabled>Disabled</el-checkbox>

    <!-- 多选框组，适用于多个勾选框绑定到同一个数组的 通过是否勾选来表示这一组选项中选中的项 -->
    <el-checkbox-group v-model="checkList">
        <el-checkbox label="Option A" />
        <el-checkbox label="Option B" />
        <el-checkbox label="disabled" disabled />
        <el-checkbox label="selected and disabled" disabled />
    </el-checkbox-group>

    <!-- 中间状态 使用 indeterminate 属性表示 checkbox 的不确定状态，一般用于实现全选效果 -->
    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Check all</el-checkbox>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :key="city" :label="city"></el-checkbox>
    </el-checkbox-group>

    <!-- 可选项目数量的限制 使用 min 和 max 属性  -->
    <el-checkbox-group v-model="mySelect" :min="1" :max="3">
        <el-checkbox v-for="item in options" :key="item" :label="item"></el-checkbox>
    </el-checkbox-group>
</template>
<script setup>
    import { ref } from 'vue'
    // 已选中
    const checkedNomarl1 = ref(true)
    // 未选中
    const checkedNomarl2 = ref(false)
    const checkedNomarl3 = ref(false)
    // 禁用状态
    const checkedDisable = ref(false)
    // 多选框组，选中的项
    const checkList = ref(['selected and disabled', 'Option A'])
    // 中间状态 实现全选
    const checkAll = ref(false)
    const isIndeterminate = ref(true)
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
    const checkedCities = ref(['Shanghai', 'Beijing'])
    // 数量限制
    const options = ["年轻10岁","瘦20斤","中500万","上清华","长高10厘米"]
    const mySelect = ref([])

    // 全选框响应方法，参数为checkall的状态值,也就是全选框的状态值
    const handleCheckAllChange = (val) => {
        // 如果参数为真，将所有选中，否则清空
        checkedCities.value = val ? cities : []
        // 所有数据选中后，改变isIndeterminate的状态值
        isIndeterminate.value = false

    }
    // 参数为checkedCities当前值
    const handleCheckedCitiesChange = (value) => {
        // 获取当前选中选项个数
        const checkedCount = value.length
        // 将选中个数和选项个数比较的结果值赋给 checkall 按钮的状态值
        checkAll.value = checkedCount === cities.length
        // 如果选中个数大于0小于所有选项，则 isIndeterminate 为不确定状态，小于0为空状态，等于length 为全选状态
        isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
    }
</script>