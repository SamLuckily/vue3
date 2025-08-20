<script setup>
    // 导入组件
    // import Hello from './views/Hello.vue'
    // import Header from './views/Header.vue';
    // import Main from './views/Main.vue';
    // import Aside from './views/Aside.vue';
    // import FC from './views/FC.vue'
    // import RFC from './views/RFC.vue';
    // import SlotFC from './views/SlotFC.vue';
    // import SlotNameFC from './views/SlotNameFC.vue';
    // import SoltIsFC from './views/SoltIsFC.vue';
    // import Home from './views/Home.vue';
    // import ProtectAbout from './views/ProtectAbout.vue';
    // import ProtectHome from './views/ProtectHome.vue';
    // import ProtectNews from './views/ProtectNews.vue';
    // import Ep from "./views/Ep.vue";
    // import EpButton from './views/EpButton.vue';
    // import EpContainer from './views/EpContainer.vue';
    // import Eplcon from './views/Eplcon.vue';
    // import EpForm from './views/EpForm.vue';
    // import EpFormInput from './views/EpFormInput.vue';
    // import EpFormCheckBox from './views/EpFormCheckBox.vue';
    // import EpFormRadio from './views/EpFormRadio.vue';
    // import EpTable from './views/EpTable.vue';
    // import EpAuatar from './views/EpAuatar.vue';
    // import EpCard from './views/EpCard.vue';
    // import EpBreadcrumb from './views/EpBreadcrumb.vue';
    // import EpMenu from './views/EpMenu.vue';
    // import EpMessage from './views/EpMessage.vue';
    // import EpMessageBox from './views/EpMessageBox.vue';
    // import EpDialog from './views/EpDialog.vue';
    // import NetAxios from './views/NetAxios.vue';
    import UseNetTools from './views/UseNetTools.vue';
</script>

<template>
    <UseNetTools></UseNetTools>
    <!-- <NetAxios></NetAxios> -->
    <!-- <EpDialog></EpDialog> -->
    <!-- <EpMessageBox></EpMessageBox> -->
    <!-- <EpMessage></EpMessage> -->
    <!-- <EpMenu></EpMenu> -->
    <!-- <EpBreadcrumb></EpBreadcrumb> -->
    <!-- <EpCard></EpCard> -->
    <!-- <EpAuatar></EpAuatar> -->
    <!-- <EpTable></EpTable> -->
    <!-- <EpFormRadio></EpFormRadio> -->
    <!-- <EpFormCheckBox></EpFormCheckBox> -->
    <!-- <EpFormInput></EpFormInput> -->
    <!-- <EpForm></EpForm> -->
    <!-- <Eplcon></Eplcon> -->
    <!-- <EpContainer></EpContainer> -->
    <!-- <EpButton></EpButton> -->
    <!-- <Ep></Ep> -->
    <!-- 路由入口 -->
     <!-- <router-link class="box" to="/"> Ceshiren </router-link>
     <router-link class="box" to="/phome"> Home </router-link>
     <router-link class="box" to="/pabout"> About </router-link>
     <router-link class="box" to="/pnews"> News </router-link> -->
     <!-- 路由出口 -->
     <router-view></router-view>
    <!-- <Home></Home> -->
    <div class="nav">
        <p>
            <router-link to="/ceshiren">测试人页面</router-link>
            <!-- <router-link to="/hogwarts" class="box">霍格沃兹页面</router-link> -->
            <router-link to="/user/1/tom" class="box">霍格沃兹页面</router-link>
            <router-link to="/user/2/Jack" class="box">霍格沃兹页面</router-link>
            <router-link to="/user/3/Rose" class="box">霍格沃兹页面</router-link>
            <router-link to="/user/4/Sam" class="box">霍格沃兹页面</router-link>
            <!-- <router-view></router-view> -->
        </p>
        <p>
            <router-link to="/user">通过URL进入到User 页面</router-link>
            <router-link to="{name: 'hoguser'}" class="box">通过Name进入到User 页面</router-link>

        </p>
        <p>
            <!-- 重定向 -->
            <router-link to="/redirectpage" class="box">RedirectPage</router-link>
            <router-link to="/macbookpro" class="box">MacBookPro</router-link>
        </p>
        <p>
            <!-- 别名 -->
            <router-link to="/alias" class="box">Alias</router-link>
            <!-- <router-link to="/aliasname" class="box">AliasName</router-link> -->
            <router-link to="/an1" class="box">An1</router-link>
            <router-link to="/an2" class="box">An2</router-link>
            <router-link to="/an3" class="box">An3</router-link>
        </p>
        <div>
            <router-view></router-view>
        </div>

    </div>

    <!-- <SoltIsFC></SoltIsFC> --> 
    <!-- <SlotNameFC></SlotNameFC> -->
    <!-- <SlotFC></SlotFC> -->
    <!-- <RFC/> -->
    <!-- <FC/> -->
    <!-- 使用组件  -->
    <!-- <Hello/>
    <hr>
    <Hello></Hello> -->
    <!-- 组件布局 -->
    <!-- <div class="root">
        <Header></Header>
        <div class="rmain">
            <Main></Main>
            <Aside></Aside>

        </div>

     </div> -->

</template>
<style>
    .box{
        margin-right: 20px;
    }
    /* .root{
        width: 1200px;
        height: 800px;
        background: burlywood;
        margin: 0 auto;
        padding: 15px;
        box-sizing: border-box;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
    }
    .rmain{
        display: flex;
    } */
</style>
