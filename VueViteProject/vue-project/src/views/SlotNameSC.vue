<template>
    <hr>
    <h2>这是一个具有插槽的组件,下面是插槽中的内容</h2>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    <hr>
</template>