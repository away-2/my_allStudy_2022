// 笔记相关接口
const router = require('koa-router')()
const userService = require('../controllers/mySqlControll.js')

router.prefix('/note')

// 根据分类查找对应的笔记列表
router.post('/findNoteListByType',async(ctx, next) =>{
    // console.log(ctx.request.body);
    const { note_type } = ctx.request.body
    // 去note表中查找有的类型为note_type的文章
    try{
        const result = await userService.findNoteListByType(note_type)
    // console.log(result)
    if(result.length){
        ctx.body = {
            code: '80000',
            data: result,
            msg: '查找成功'
        }
    }
    }catch(error){
        ctx.body = {
            code: '80002',
            data: error,
            msg: '服务器异常'
        }
    }
    
})


module.exports = router
