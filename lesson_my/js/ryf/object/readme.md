#  一起读技术文章，提升我们的认知
 
  1. c语言    过程式语言   函数    main()
      js   基于（面向）对象？
       面向 ？    基于 ？ 
       object-based
    
   2. js 原来没有class 关键词，
      var es6   let  const  es6 以后
      es6 2015 才有了clas 关键字
      js 不是一种真正的面向对象编程语言      ，基于对象的语言 ，这个对象就是Object
      Object  是所有对象的原型


   3. 除了简单数据类型， 都是对象
        任何对象都有一个_proto_私有属性  去说明她基于那个对象创建的

    4. js  本没有类， 早期 class 关键字都没有
         但是内置了一个Object 对象，
         其他所有对象都基于这个空对象进行创建
         再把这个对象的构建过程（属性和方法集合），用一个函数来封装
         new Person()  得到了  基于对象的新的对象

    5. 基于对象， 一步一步创建的原始模式  一步步创建的
         缺点是慢  重复

    6. 函数封装对象的时候  
          缺点是

    7. js  使用构造函数的方式来创建类
         以new 的方式运行
         对象构建过程的封装  this 指向  实例
         另外  class  有的instanceof  也有
         并且兄弟对象之间基于的对象一致


    8. js 基于对象
         - __proto__ Object
         - instanceof
         - 

    9. js 中创建一个类 type  写个构造函数就完成了


    10. js JS 如何构建类的流程
        - 类就是属性和方法集合的模板  ， 抽象的 ，
        - 先使用构造函数   定义实例属性的构造过程， 每个对象属性是不一样的， 
             归 实例自己所有  this  具象

        - 由于 实例们公有的属性和方法， 没有必要放在构造函数里，因为会消费没必要
        的内存
        - 每个函数都有一个prototype 属性，专门用来设计 共享的属性和方法对象
            原型对象
            js类=构造函数（constructor)+prototype
            new 构造函数（Constructor）  实例对象

        - 实例是怎么拿到构造函数的prototype 里的属性或方法呢？

        - 