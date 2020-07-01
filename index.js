var express= require('express');
var port =process.env.PORT||3000
    app=express();
    app.get('/',function(req,res){
        res.send('hi there!')
    })
    app.listen(port,function(){
        console.log('app is runnig on'+port);
        
    })