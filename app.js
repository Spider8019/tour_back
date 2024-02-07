const express=require("express")
const app=express()

app.get("/placesinacity",async(req,res)=>{

    const arr=[{
        placeName:"Sree Ram Janmabhoomi Mandir",
        placeCity:"Ayodhya",
        placeImage:"https://i.pinimg.com/originals/39/aa/eb/39aaebc33872252aed06ee1af42fc79b.jpg"
    },{
        placeName:"Kanak Bhawan",
        placeCity:"Ayodhya",
        placeImage:"https://i.pinimg.com/originals/ca/75/2f/ca752fc70b74b2f2b7f8692e708ab737.jpg"
    },{
        placeName:"Ayodhya Junction",
        placeCity:"Ayodhya",
        placeImage:"https://images.indianexpress.com/2020/08/ayodhya-railways-station.jpg"
    },{
        placeName:"Sree Ram Janmabhoomi Mandir",
        placeCity:"Ayodhya",
        placeImage:"https://i.pinimg.com/originals/39/aa/eb/39aaebc33872252aed06ee1af42fc79b.jpg"
    },{
        placeName:"Ambedkar Park",
        placeCity:"Lucknow",
        placeImage:"https://i.pinimg.com/originals/2f/d6/86/2fd686117463355983f8b0690d161b3f.jpg"
    },{
        placeName:"Hanumat Dham",
        placeCity:"Lucknow",
        placeImage:"https://safarjankari.com/wp-content/uploads/2023/01/Hanumant-Dham-Lucknow.jpg"
    },{
        placeName:"Bda Imambara",
        placeCity:"Lucknow",
        placeImage:"https://i.pinimg.com/originals/ab/30/6d/ab306db9a840be8a393079754228cb71.jpg"
    },{
        placeName:"Chota Imambara",
        placeCity:"Lucknow",
        placeImage:"https://i.pinimg.com/originals/24/db/dc/24dbdc1379f9e32a4a0ad682096a3655.jpg"
    },{
        placeName:"Lotus Temple",
        placeCity:"Delhi",
        placeImage:"https://i.pinimg.com/originals/4a/67/35/4a673520927a900a3b37a1ad233fe1df.jpg"
    }]
    const result = arr.map(({ placeName, placeImage }) => ({ placeName, placeImage }));
    res.send(result)
})
app.listen(3000,()=>console.log("server is listening on port 3000"))
