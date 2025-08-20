<script setup>
import SoltIsHomeSC from './SoltIsHomeSC.vue';
import SoltIsAboutSC from './SoltIsAboutSC.vue';
import {ref} from "vue"

const currnetTab = ref("SoltIsHomeSC")

const tabs = {
    SoltIsHomeSC:SoltIsHomeSC,
    SoltIsAboutSC:SoltIsAboutSC
}
</script>
<template>
    <div class="main">
        <button
            v-for="(value, tab) in tabs"
            :key="tab"
            :class="{ active: currnetTab === tab }"
            @click="currnetTab = tab"
            >
            {{ tab }}
        </button>
        <component :is="tabs[currnetTab]"></component>
    </div>
</template>
<style>
    .active{
        background-color: blueviolet;
        color: white;
        font-size: 20px;
    }
</style>