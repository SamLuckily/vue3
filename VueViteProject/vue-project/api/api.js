import instance from "./http";

const api={
    get(reqUrl, reqParams){
        return instance({
            url: reqUrl,
            method: "get",
            params: reqParams
        })
    },
    post(reqUrl, data){
        return instance({
            url: reqUrl,
            method: "post",
            data: data
        })
    },
    put(reqUrl, data){
        return instance({
            url: reqUrl,
            method: "put",
            data: data
        })
    },
    delete(reqUrl, data){
        return instance({
            url: reqUrl,
            method: "delete",
            data: data
        })
    }
}
export default api