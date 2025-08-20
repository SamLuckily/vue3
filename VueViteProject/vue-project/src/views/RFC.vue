<script setup>

    import RSC from './RSC.vue';
    import {ref} from "vue"

    const sData = ref([
        {sid: "s01",name: "Tom",age: "23"},
        {sid: "s02",name: "Jack",age: "24"},
        {sid: "s03",name: "Rose",age: "25"}
    ])


    function delDataAction(obj){
        const idx = sData.value.indexOf(obj)
        sData.value.splice(idx,1)
    }
</script>

<template>
    <h1>这是父组件的标题</h1>
    <RSC :data="sData" @delData="delDataAction"  />
</template>