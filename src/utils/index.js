export function throttle(callback,time){
      let start = 0 //开始一次都没有执行 ==> 保证第一个事件必然处理
      return function(event){
        const now = Date.now()
        if(now - start > time){
          callback.call(this,event)
          start = now
        }
        
  }
}