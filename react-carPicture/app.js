const express = require('express');
// const webpack = require('webpack');
const fs = require('fs');

const app = express();

app.use(express.static('www'));

app.get("/car",(req,res)=>{
  let imagesObj = {};
  fs.readdir('./www/images/Corolla/',(err,dataColor) => {
    dataColor.forEach((color)=>{
      imagesObj[color] = {};
      let dataAlbum = fs.readdirSync('./www/images/Corolla/'+color);
        dataAlbum.forEach((album)=>{
          let imageUrl = fs.readdirSync('./www/images/Corolla/'+color+'/'+album);
            imagesObj[color][album] = imageUrl;
        })
    })
    res.json({results:imagesObj});
  })
})




app.listen(3030);
console.log("3030端口已经监听");

//引入webpack的配置文件
// var webpackConFig = require("./webpack.config.js");
//运行webpack
// webpack(webpackConFig, (err, stats) => {
//   if (err) console.log(err);
//   console.log("webpack已经运行");
// });