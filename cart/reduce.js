
var total = [1,2,3,4,3,2,22,222,4].reduce(function(prev,next,index,item){
  return prev + next;
},1)
console.log(total);
var newArr = [[23,23],[123],[123]].reduce((a,b)=> {
  return a.concat(b);
})
console.log(newArr);