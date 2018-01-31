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
 

``` javascript
	[1,2,3,4,3,2,22,222,4].reduce(function(prev,next,index,item){
	  console.dir(arguments);
	},initialValue)
```
												--摘自 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
