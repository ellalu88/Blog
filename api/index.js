// create express server
const express= require("express");
const app=express();
//env config
const dotenv=require("dotenv");
//create mongoose
const mongoose=require("mongoose")
//create ruotes
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const categoryRoute=require("./routes/categories");
const multer=require("multer")


dotenv.config();
// can send any json file, json object
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// app.use("/ella",(req,res)=>{
//     console.log("hey this is ella url")
// })

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images");
  },
  filename:(req,file,cb)=>{
    cb(null,req.body.name);
  }
})
const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("File has been uploaded")
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);
app.listen("5000",()=>{
    console.log("Backend is running.")
})