<!-- <script setup>
    import {ref} from "vue"
    const activeIndex = ref("1")

</script>
<template>
    <el-menu mode="horizontal" :default-active="activeIndex" background-color="#545c64" active-text-color="blue">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">新闻</el-menu-item>
        <el-menu-item index="3">财经</el-menu-item>
        <el-sub-menu index="4">
            <template #title>运动</template>
            <el-menu-item index="4-1">NBA</el-menu-item>
            <el-menu-item index="4-2">CBA</el-menu-item>
            <el-menu-item index="4-2">FIFA</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="5" disabled>汽车</el-menu-item>

    </el-menu>
</template> -->

<template>
    <el-row>
        <el-col :span="8">
            <el-dropdown>
                <span>
                    悬停触发下拉菜单 <el-icon> <arrow-down /> </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                        <el-dropdown-item :icon="CirclePlusFilled">Action 2</el-dropdown-item>
                        <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                        <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                        <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
        <el-col :span="8">
            <el-dropdown trigger="click">
                <span>
                    单击触发下拉菜单 <el-icon> <arrow-down /> </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                        <el-dropdown-item :icon="CirclePlusFilled">Action 2</el-dropdown-item>
                        <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                        <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                        <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
        <el-col :span="8">
            <el-dropdown trigger="contextmenu">
                <span>
                   右击触发下拉菜单 <el-icon> <arrow-down /> </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                        <el-dropdown-item :icon="CirclePlusFilled">Action 2</el-dropdown-item>
                        <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                        <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                        <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script setup>
import {
    ArrowDown,
    Check,
    CircleCheck,
    CirclePlus,
    CirclePlusFilled,
    Plus,
} from '@element-plus/icons-vue'
</script>