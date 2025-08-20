<script setup>
    import SlotNameSC from './SlotNameSC.vue';
</script>
<template>
    <h1>这是父组件内容</h1>

    <SlotnameSC>
        <template v-slot:header>
            <h1>这是页面标题</h1>
        </template>

        <template #default>
            <p>这是内容显示区域</p>
            <p>用来显示文本和图片</p>
        </template>

        <!-- <p>这是内容显示区域</p>
        <p>用来显示文本和图片</p> -->

        <template #footer>
            <p>这里显示页脚信息</p>
        </template>
    </SlotnameSC>
</template>