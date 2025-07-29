 const express=require('express');
const path=require('path');
const app=express();
const cookie=require('cookie-parser');
const userModel = require('./models/user.js');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');




app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index");
})
// app.post("/create",(req,res)=>{
//     let {name,email,password}=req.body
//     bcrypt.genSalt(10,function(err,salt){
//         bcrypt.hash(password,salt),async (err,hash)=>{
            
//          let user=  await userModel.create({
//              name,
//             email,
//             password:hash
//                   });
//              let token=     jwt.sign({ email },"shhhhhhhhhh");
//              res.cookie("token",token);
//                    res.send(user);
//         }
         
//     })
//   })


app.post("/create", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            name,
            email,
            password: hash
        });

        const token = jwt.sign({ email }, "shhhhhhhhhh");
        res.cookie("token", token);
        res.render("login");
    } catch (err) {
        console.error(err);
        res.status(500).send("Registration failed");
    }
});
app.get("/login",function(req,res){
    res.render("login");
})

app.post("/login", async function(req,res){
   let user=await userModel.findOne({email:req.body.email})
   if(!user) return res.send("something went wrong");

   bcrypt.compare(req.body.password,user.password,function(err,result){
   if(result) res.send("yes you can login now");
   else res.send("no you cant login");
   })
})
app.get("/logout",function(req,res){
    res.cookie("token","");
    res.redirect("/");
})


app.listen(3000);