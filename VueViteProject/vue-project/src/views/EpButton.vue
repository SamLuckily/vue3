<template>
    <!-- 普通按钮 -->
    <div>
        <el-button>默认普通按钮组件样式</el-button>
    </div>
    <!-- 按钮类型 -->
    <div>
        <el-button type="primary"> Primary </el-button>
        <el-button type="info"> Info </el-button>
        <el-button type="warning"> Warning </el-button>
        <el-button type="danger"> Danger </el-button>
        <el-button type="success"> Success </el-button>
    </div>
    <!-- 圆角按钮 -->
    <div>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>圆角按钮</el-button>
        <el-button type="danger" round>圆角按钮</el-button>
        <el-button type="danger" round></el-button>
    </div>
    <!-- 圆形按钮 -->
     <div>
        <el-button circle></el-button>
        <el-button type="primary" circle></el-button>
        <el-button type="danger" circle></el-button>
        <el-button type="danger" circle></el-button>
    </div>
    <!-- 加载样式的按钮 -->
     <div>
        <el-button loading type="danger">加载钟。。。</el-button>
        <el-button type="primary" circle></el-button>
        <el-button type="danger" circle></el-button>
        <el-button type="danger" circle></el-button>
    </div>
    <!-- 禁用状态的按钮 -->
     <div>
        <el-button disabled type="danger">禁用。。。</el-button>
        <el-button type="primary" circle></el-button>
        <el-button type="danger" circle></el-button>
        <el-button type="danger" circle></el-button>
    </div>
    <!-- 按钮尺寸 -->
     <div>
        <el-button type="primary" size="large">大按钮</el-button>
        <el-button type="primary" size="default"> 默认按钮 </el-button>
        <el-button type="primary" size="small">小按钮</el-button>
        <el-button> 默认按钮 </el-button>
    </div>
    <!-- 按钮组 -->
    <el-button-group>
        <el-button type="primary">1</el-button>
        <el-button type="primary">2</el-button>
        <el-button type="primary">3</el-button>
        <el-button type="primary">4</el-button>
    </el-button-group>


</template>