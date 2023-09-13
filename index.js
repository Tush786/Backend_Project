const express=require('express');
const {connection}=require('./server/db')
const app=express();
const {ProductRouter}=require('./Router/Productrouter')
const cors=require('cors')

const PORT=1012;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('baseUrl End Point')
})

app.use('/',ProductRouter);
app.use(cors())


app.listen(1012,async()=>{
   try {
    await connection
     console.log(`Post connected Successfully on`)
   } catch (error) {
     console.log(error);
   }
   console.log('listning on port')
})