<script setup>
    import SlotOC from './SlotOC.vue';
    import SlotSC from './SlotSC.vue';
</script>

<template>
    <h1>这是父组件内容</h1>

    <SlotSC> 这是向子组件插槽中添加的一段文本 </SlotSC>
    <SlotSC>
        <div>
            <ul>
                <li>这是向子组件插槽中添加的一个复合HTML元素1</li>
                <li>这是向子组件插槽中添加的一个复合HTML元素2</li>
                <li>这是向子组件插槽中添加的一个复合HTML元素3</li>
            </ul>
        </div>
    </SlotSC>

    <SlotSC>
        <SlotOC></SlotOC>
    </SlotSC>
</template>