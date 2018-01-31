## Array.prorotype.reduce(callback[, initialValue])

### 2个参数，一个回调函数,一个初始值

-    initialValue
  [可选] 用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则  将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
  
-   callback
    执行数组中每个值的函数，包含四个参数：
 

###   callback（如下所示）。
 -  accumulator
    累加器累加回调的返回值; 它是上一次调用回调时返回的累积值 
    
 -   currentValue
    数组中正在处理的元素。
    
 -  currentIndex
    数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为    0，否则为索引为1。
    
 - array
    调用reduce的数组
 
>  示例:
``` javascript
//数组求和:
	var sum = [0, 1, 2, 3].reduce(function (a, b) {
  		return a + b;
	}, 0);
	// sum is 6
	
//计算数组中每个元素出现的次数:
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//二维数组拍平:
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]

//数组去重:
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current)=>{
    if(init.length===0 || init[init.length-1]!==current){
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]
```




> 摘自 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
