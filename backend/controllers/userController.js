import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//route for user login
const loginUser=async(req,res)=>{

    try {
        const {email,password}=req.body;
        const user =await userModel.findOne({email});
        console.log("found")
        console.log(user)
        if(!user){
            return res.json({success:false,message:"user not exists"})
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(isMatch){
            const token=createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"invalid credentials"})
        }
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}



//route for user register
const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        
        //checking user already eists or not
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exists"})
        }

        //validating
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"please enter a strong email"})
        }
        //hashing user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt)

        const newUser = new userModel({ name, email, password: hashedPassword });

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({ success: true, token });

        
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}


//route for admin login
const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(email+password, process.env.JWT_SECRET);
        res.json({ success: true, token });
      } else {
        return res.json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: error.message });
    }
  };
  

export {loginUser,registerUser,adminLogin}