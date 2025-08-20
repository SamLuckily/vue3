<template>
    <div>
        <h1>以GET方式发送请求</h1>
        <button @click="sendGetReuqest">发送普通的get请求</button>
        <button @click="sendGetReuqestWithParams">发送带参数的GET请求</button>
    </div>
    <div>
        <h1>以POST方式发送请求</h1>
        <button @click="sendPostReuqest">发送普通的Post请求，无数据</button>
        <button @click="sendPostReuqestWithJson">发送带参数的Post请求,使用JSON格式携带数据</button>
        <button @click="sendPostReuqestWithFormData">发送带参数的Post请求,使用表单格式携带数据</button>
    </div>

</template>
<script setup>
    import axios from "axios"
    function sendGetReuqest(){
        var url = "https://httpbin.ceshiren.com/get?id=123&name=tom&age=22"
        axios.get("url")
        .then(function(response){
            alert("GET请求成功")
            console.log(response)
        })
        .catch(function(error){
            alert("GET请求失败")
            console.log(error)
        })
    }
    const sendGetReuqestWithParams = ()=>{
        axios.get("https://httpbin.ceshiren.com/get", {params:{id:112233, name:"Jack", age:99, gender:"male"}})
        .then((response)=>{
            alert("GET请求成功")
            console.log(response)
        })
        .catch(function(error){
            alert("GET请求失败")
            console.log(error)
        })
    }
    const sendPostReuqest = ()=>{
        axios.post("https://httpbin.ceshiren.com/post")
        .then((response)=>{
            alert("POST请求成功")
            console.log(response)
        })
        .catch((error)=>{
            alert("POST请求失败")
            console.log(error)
        })
    }
    const sendPostReuqestWithJson = ()=>{
        axios.post("https://httpbin.ceshiren.com/post", {id:1111, name: "rose"})
        .then((response)=>{
            alert("POST请求成功")
            console.log(response)
        })
        .catch((error)=>{
            alert("POST请求失败")
            console.log(error)
        })
    }
    const sendPostReuqestWithFormData = ()=>{
        const formData = new FormData()
        formData.append("id", 222)
        formData.append("name", "Tony")
        formData.append("address", "Beijing")
        formData.append("age", 22)




        axios.post("https://httpbin.ceshiren.com/post", formData, {headers: {"Content-Type":"multipart/form-data"}})
        .then((response)=>{
            alert("POST请求成功")
            console.log(response)
        })
        .catch((error)=>{
            alert("POST请求失败")
            console.log(error)
        })
    }
</script>