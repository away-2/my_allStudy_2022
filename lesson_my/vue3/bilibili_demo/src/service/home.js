import axios from "./config"

export const getSwiperList =() =>{
    return axios.get('/swoperList')
}
export const getVideosList =() =>{
    return axios.get('/videosList')
}
export { getSwiperList, getVideosList }