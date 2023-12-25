import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../../style/Authstyle.css";
import { useAuth } from '../../context/auth';

const ForgotPassword = () => {
    const[email,setEmail]=useState("");
    const[newpassword,setNewPassword]=useState(""); 
    const[answer,setAnswer]=useState(""); 

    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("/api/v1/auth/forgot-password",{email,newpassword,answer});
            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate("/login");
            }
            else{
                toast.error(res.data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
    }

  return (
    <Layout title={'Forgot Password-Ecommerce APP'}>
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
    <h1>RESET PASSWORD</h1>
      <div className="mb-3">
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your email' required/>
      </div>
      <div className="mb-3">
          <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your favorite movie' required/>
      </div>
      <div className="mb-3">
          <input type="password" value={newpassword} onChange={(e)=>setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required/>
      </div>
          <button type="submit" className="btn btn-primary">RESET</button>
  </form>
    </div>
    </Layout>
  );
};

export default ForgotPassword
