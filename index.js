'use strict';
const express=require('express');
const app =express();
const port=process.env.PORT||5000;

// Cấu hình public static
app.use(express.static(__dirname+'/public'));

// app.get('/',(req,res)=>{
//     res.send('Hello');
// })


// start web server
app.listen(port,() =>{
    console.log(`server is running on port ${port}$`);
})