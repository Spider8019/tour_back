const express=require("express")
const app=express()

app.get("/placesinacity",async(req,res)=>{
    const arr=[{
        placeName:"Shri Ram Janm Bhoomi",
        placeImage:"https://www.thetoptours.com/wp-content/uploads/ram-janmabhoomi-1.jpg"
    }]
    res.send({status:200,result:arr})
})
app.listen(3000,()=>console.log("server is listening on port 3000"))