<script setup>
    // 表格的数据
    const tableData = [
        {
            num: '01',
            case: '测试用例1',
            priority: 'P0',
        },
        {
            num: '02',
            case: '测试用例2',
            priority: 'P1',
        },
        {
            num: '03',
            case: '测试用例3',
            priority: 'P3',
        },
    ]
    // 响应函数
    const handleEdit = (index, row) => {
        console.log(index, row)
    }
    const handleDelete = (index, row) => {
        console.log(index, row)
    }

</script>
<template>
    <el-table :data="tableData" style="width: 800px">
        <el-table-column prop="num" label="编号" width="80"/>
        <el-table-column prop="case" label="用例名称" width="280"/>
        <el-table-column prop="priority" label="优先级" width="180"/>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button size="small" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>

            </template>

        </el-table-column>
    </el-table>
</template>