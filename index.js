const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')


const server=express()
server.use(cors())
server.use(bodyParser.json())


mongoose.connect('mongodb+srv://aishwarya:ufucNzS5ACyfr1Nt@recipe.yrvek.mongodb.net/?retryWrites=true&w=majority&appName=recipe',{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("BD connected")
}).catch((error)=>{
    console.log("error",error.message)
})

 const userRoutes=require('./routes/api')
 server.use('/api',userRoutes)

server.listen(3333,()=>{
    console.log("server started on 3333 ")
})