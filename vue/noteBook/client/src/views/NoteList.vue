<template>
    <div class="note-list">
      <ul>
        <li>
            <div class="img">
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.Fr1YdHwEPBITGD7zLLv0UQHaFj?pid=ImgDet&rs=1" alt="">
            </div>
            <p class="time">2023-06-01</p>
            <p class="title">超级粘牙QQ弹弹红糖糍粑</p>
        </li>
        <li>
            <div class="img">
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.Fr1YdHwEPBITGD7zLLv0UQHaFj?pid=ImgDet&rs=1" alt="">
            </div>
            <p class="time">2023-06-01</p>
            <p class="title">超级无敌好吃红糖糍粑啊啊啊啊啊啊啊</p>
        </li>
        <li>
            <div class="img">
                <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.Fr1YdHwEPBITGD7zLLv0UQHaFj?pid=ImgDet&rs=1" alt="">
            </div>
            <p class="time">2023-06-01</p>
            <p class="title">超级无敌好吃红糖糍粑啊啊啊啊啊啊啊</p>
        </li>
      </ul>
    </div>
</template>

<script setup>
import axios from '@/api';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
onMounted(async() =>{
    // console.log(route.query.title)
    const { data } = await axios.post('/note/findNoteListByType',{
        note_type: route.query.title
    })
    console.log(data);  
})
</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 4rem;
            padding-bottom: 0.72rem;
            .img{
                width: 100%;
                height: 4rem;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 0.27rem;
                }
            }
            .time{
                font-size: 0.37rem;
                color: rgba(16,16,16,1);
                margin: 10px 0 5px 0;
            }
            .title{
                font-size: 0.37rem;
                color: rgba(16,16,16,1);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>