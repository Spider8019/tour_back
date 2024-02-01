const express=require("express")
const app=express()

app.get("/placesinacity",async(req,res)=>{
    const arr=[{
        placeName:"Sree Ram Janmabhoomi Mandir",
        placeImage:"https://i.pinimg.com/originals/39/aa/eb/39aaebc33872252aed06ee1af42fc79b.jpg"
    },{
        placeName:"Kanak Bhawan",
        placeImage:"https://i.pinimg.com/originals/ca/75/2f/ca752fc70b74b2f2b7f8692e708ab737.jpg"
    },{
        placeName:"Ayodhya Junction",
        placeImage:"https://images.indianexpress.com/2020/08/ayodhya-railways-station.jpg"
    }]
    res.send({status:200,result:arr})
})
app.listen(3000,()=>console.log("server is listening on port 3000"))