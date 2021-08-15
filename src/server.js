'use strict';

const express = require('express');
const errorHandller=require('./error-handller/500');
const pageNotFound=require('./error-handller/404');


const app = express();
const {basicAuth,middelSignUp }=require('./auth/auth.middelwear')
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello to backend')
})



app.post('/signup',middelSignUp ,(req, res, next) => {
  
    res.status(201).json(req.record);

});


app.post('/signin', basicAuth, (req, res, next)=> {

 res.status(200).json({username: req.username ,id :req.user.id})
    
});


app.use('*',pageNotFound)
app.use(errorHandller)



module.exports={
    app 
    
    
}