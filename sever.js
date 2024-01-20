const ex=require('express')
const app=ex()
const body=require('body-parser')
const cores=require('cors')
const corsopt={
    origin:'*',
    methods:'POST',
    credentials:true,
    optionsSuccessStatus:204
}

app.use(body.json())
app.use(body.urlencoded({extended:true}))
app.use(cores(corsopt))
app.use(ex.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/main.html',(req,res)=>{
    res.sendFile(`${__dirname}/main.html`)
})

app.get('/lending.html',(req,res)=>{
    res.sendFile(`${__dirname}/lending.html`)
})

app.post('/login',(req,res)=>{
    res.json({status:'done'})
})

app.listen(8000,()=>{console.log('server started')})