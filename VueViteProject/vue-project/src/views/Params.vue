<template>
    <div>
        <h1></h1>
        <!-- <p> 用户的 ID 是 {{ this.$route.params.userId }}</p> -->
        <!-- 因valor插件原因，提示工具会报错，但可以正常使用 -->
        <p> 用户的 UserID 是 {{ $route.params.userId }}</p>
    </div>
</template>