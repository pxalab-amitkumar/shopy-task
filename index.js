//require
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const path=require('path');
//selfmade module 
const routerApp=require('./routers/surveyAppRouter');
//app definition
const app=express();
//mongo db connectivity
//mongodb://<dbuser>:<dbpassword>@ds129156.mlab.com:29156/surveydata
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://amit:qwertyuiop@ds129156.mlab.com:29156/surveydata')

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//router
app.use('/',routerApp);

app.use(bodyParser.urlencoded({
    extended:false
}));


app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});


//404
app.use((req,res,next)=>{
    const err=new Error('NOT FOUND');
    err.status=400;
    next(err);
});
//error handler function
app.use((err,req,res,next)=>{
    const error=app.get('env')==='development' ? err:{};
    const status=err.status || 500;
    //For User 
    res.status(status).json({
        error:{
            message:error.message
        }
    });
    //for Developer
    //console.log(err);
});
//port definition
const PORT=process.env.PORT || 3000;
//port start
app.listen(PORT,()=>{
    console.log(`server is live at ${PORT}`)
});