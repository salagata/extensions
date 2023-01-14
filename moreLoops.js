function multiRun(fun,attr){
  for(let atr of attr){
    fun(atr)
  }
}
function multiAttr(fun,attr) {
  for(let f of fun)
    f(attr)
}
function multiEx(fa) {
  for(let ev in fa){
   eval(""+ev + "(" + fa+ ")") 
    
  }
  
}
function loop(times,loop,attr){
  for(let i = 0;i>times;i++){
    loop(attr)
  }
}
