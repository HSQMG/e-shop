'use strict';
const express=require('express');
const app =express();
const port=process.env.PORT||5000;
const expressHandlebars=require('express-handlebars');
// Cấu hình public static
app.use(express.static(__dirname+'/public'));
// Cấu hình sử dụng express handlebars
app.engine('hbs',expressHandlebars.engine({
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+'/views/partials',
    extname:'hbs',
    defaultLayout:'layout'
}));
app.set('view engine','hbs');

//routes
app.get("/createTables", (req, res) => {
    let models = require("./models");
    models.sequelize.sync().then(() => {
        res.send("Table created!");
    });
  });

app.get('/',(req,res) => {
    res.render('index');
})

app.get('/:page',(req,res) => {
    res.render(req.params.page);
})




// start web server
app.listen(port,() =>{
    console.log(`server is running on port http://localhost:${port}`);
})






// app.get('/',(req,res)=>{
//     res.send('Hello');
// })
