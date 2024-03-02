// const {Translate}=require("@google-cloud/translate").v2
// require("dotenv").config()

// const CREDENTIALS=JSON.parse(process.env.CREDENTIALS)

// const translate=new Translate({
//     credentials:CREDENTIALS,
//     projectId:CREDENTIALS.projectId
// })

// const detectLanguage=async(text)=>{
//     try{
//         let response=await translate.detech(text)
//         return response[0].language
//     }catch(error){
//         console.log(`Error at detect language -->${error}`)
//         return 0;

//     }
// }

// const translateText=async(text,targetLanguage)=>{
//     try{
//         let [response]=await translate.translate(text,targetLanguage)
//         return response
//     }catch(error){
//         console.log(`Error at translate Text --> ${error}`)
//         return 0;
//     }
// }