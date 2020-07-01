var express= require('express');
var port =process.env.PORT||8080
    app=express();
    var todoRoutes=require('./routes/todos');
const bodyParser = require('body-parser');


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/',function(req,res){
        res.send('Hello From ROOT Routes')
    });
    app.use('/api/todos',todoRoutes);

    app.listen(port,function(){
        console.log('app is runnig on'+ ' ' +port);
        
    })