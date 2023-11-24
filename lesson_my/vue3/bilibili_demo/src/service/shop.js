import axios from "./config"

// 接口设计
export const _products =() =>{
    return axios.get('/products')
}