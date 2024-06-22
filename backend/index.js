const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
// import braintree from 'braintree';
const braintree = require('braintree');
const timeStamp  = require('console');


// import { time, timeStamp } from 'console';
// import { stat } from 'fs';
// import { type } from 'os';
const port=process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;


app.use(express.json());  //whatever req from res will automatically pass through json
app.use(cors());          //express app will connect to port 4000

// app.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(500).json({success:false, error: 'Internal server error'});
// });

// Database connection with mongoDB
mongoose.connect(MONGO_URI);

//API creation
app.get("/",(req,res) =>{
    res.send("Express app is running")

})

//Image storing engine

const storage= multer.diskStorage({
    destination:'./Upload/Images',
    filename: (req,file,cb) =>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})


const upload = multer({storage:storage})

//creating upload endpoint for images
app.use('/Images',express.static('Upload/Images'))
app.post("/Upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/Images/${req.file.filename}`
    })
})

//Schema for creating product
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})
app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array= products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    await product.save();
    res.json({success:true});
})

//creating api for deleting product
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Product deleted");
    res.json({success:true,
        name:req.body.name,
    });
})

//creating api for fetching all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
})

//schema for creating user
const Users = mongoose.model("Users",{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    },
});

const orderSchema = mongoose.model("orderSchema",{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required:true,
    },
    status:{
        type:String,
        default:'pending',
        enum:['pending','completed','cancelled'],
    },
    orderItems:[
        {
           type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
        },
    ],
    
    paymentMethod:{
        type:String,
        required:true,
    },
    
},{timeStamp:true});


//creating end point for registering the user

app.post('/signup',async(req,res) =>{

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Existing user found"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    });
    await user.save();
    const data = {
        user:{
            id:user.id
        }
    };
    const token = jwt.sign(data,JWT_SECRET);
    res.json({success:true,token})
})


//creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare= req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,JWT_SECRET);
            res.json({success:true, token});
        }
        else{
            res.json({
                success:false,error:"Password Incorrect"
            });
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email-id"});
    }
})

//creating end point for new collection data

app.get('/newcollection', async(req,res)=>{
    let products = await Product.find({});
    let newCollection  = products.slice(1).slice(-8);
    console.log("New Collection fetched");
    res.send(newCollection);
})

//creating endpoint for popular in sneakers
app.get('/popularinsneakers',async(req,res)=>{
    let products = await Product.find({category:"sneakers"});
    let popular_in_sneakers = products.slice(0,4);
    console.log("popular in sneakers fetched");
    res.send(popular_in_sneakers);
})
//creating middleware to fetch user 
    const fetchUser = async (req,res,next) =>{
        
        const authHeader = req.headers['authorization'];
        
        if(!authHeader){
           return res.status(401).send({error:"please authenticate using valid token"})
        }
        const token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).send({error:"Please authenticate using a valid token"})
        }
        
            try{
                const data = jwt.verify(token,JWT_SECRET);
                req.user = data.user;
                next();
            }
            catch(error){
                res.status(401).send({error:"Please authenticate using a valid token"})
            }

        }

    

//creating endpoint for adding products in cartdata
app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("Add to cart");
    console.log(req.body,req.user);
    try{
    let userData = await Users.findOne({_id:req.user.id});
    if(!userData){
        return res.status(400).json({error:"User not found"})
    }
    if(!userData.cartData){
        userData.cartData = {};
    }
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.json({message:'Added to cart'});
}catch(error){
    console.error("Error in addtocart:",error);
    res.status(500).json({error:"Internal server error"});
}
});

//creating endpoint to remove data from cart
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("Remove from cart");
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send('Removed');
})

//creating endpoint to get cartdata
app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("Get cart");
    try{
    let userData = await Users.findOne({_id:req.user.id});
    if(!userData){
        return res.status(400).json({error:"User not found"})
    }
    res.json(userData.cartData);
}catch(error){
    console.error("Error in getcart:",error);
    res.status(500).json({error:"Internal server error"});
}
});

//endpoint to fetwch product by category
app.get('/products/:category',async(req,res)=>{
    try{
    let products = await Product.find({category:req.params.category});
    res.send(products);
    }catch(error){
        console.error("Error in getcart:",error);
        res.status(500).json({error:"Internal server error"});
    }
});



//payment gateway
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});
//token generation
app.get('/api/v1/product/braintree/token', async (req, res) => {
    try{
        gateway.clientToken.generate({}, function(err, response) {
            if(err){
                res.status(500).send(err);
    
            }
            else{
                res.send(response);
            }
        });
    }
        catch(error){
        console.error("Error in getcart:",error);
        res.status(500).json({error:"Internal server error"});
    
    }

});
//payment processing
app.post('/api/v1/product/braintree/payment',fetchUser, async(req, res) => {
    try{
        const{cartData,nonce} = req.body;
        let total = 0;
        cartData.map( (i) => {total+=i.price*i.quantity});
        let newTransaction = gateway.transaction.sale({
            amount: total,
            paymentMethodNonce: nonce,
            options: {
              submitForSettlement: true
            }
        },
                function(error, result) {
            if (result) {
                const order = new orderSchema({
                    user:req.user._id,
                    orderItems:cartData,
                    payment:result,
                }).save();
                res.json({ok:true});
            }
             else {
                res.status(500).send(error)
            }
        }
    );
    } catch(error){
        console.error("Error in getcart:",error);
        res.status(500).json({error:"Internal server error"});
    }

});




app.listen(port,(error) => {
    if(!error){
        console.log("Server running on port" +port)
    }
    else{
        console.log("Error:" +error)
    }
})