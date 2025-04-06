const express = require('express'); 
const morgan = require('morgan'); 

const app = express(); 


app.use(morgan('dev')); 

//middlewares for form submission
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

//
app.use(express.static("public")); 


app.set('view engine','ejs'); 

// custome middleware 
app.use((req,res,next)=>{
    // Do something with req or res    
    return next();  // pass to the next middleware or route
}); 

app.get('/',(req,res,next)=>{
    
    next(); 
},(req,res)=>{
    res.render('index');  
}); 

app.get('/about',(req,res)=>{
    res.send("this is about page"); 
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body); // the data of front end is recevid in get(req.query) post(req.body)
    res.send("data resevid"); 
})

app.listen(3000); 