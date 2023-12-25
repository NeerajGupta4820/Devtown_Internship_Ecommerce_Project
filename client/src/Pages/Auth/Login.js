import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import "../../style/Authstyle.css";
import { useAuth } from '../../context/auth';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(""); 
    const [auth,setAuth]=useAuth() 

    const navigate=useNavigate();
    const location=useLocation()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("/api/v1/auth/login",{email,password});
            if(res.data && res.data.success){
                toast.success(res.data && res.data.message)
                setAuth({
                    ...auth,
                    user:res.data?.user,
                    token:res.data?.token,
                });
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate(location.state ||"/");
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
    <Layout title={"Login Ecommerce-App"}>
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
    <h1>Sign In</h1>
      <div className="mb-3">
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your email' required/>
      </div>
      <div className="mb-3">
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required/>
      </div>
          <div className='mb-3'>
          <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button> 
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
  </form>
    </div>
  </Layout>

  )
}

export default Login











 



// <nav className='n-wrapper'>
// <div className='n-left'>
//     <Link to='/' className="navbar-brand" >
//        🛒 Ecommerce App
//     </Link>
// </div>
// <div className='n-list'>
//         <ul >
//         <li className='nav-item'>
//           <NavLink to="/" className='nav-link'>Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/category" className='nav-link'>Category</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/register" className='nav-link'>Register</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/login" className='nav-link'>Login</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/cart" className="nav-link ">cart(0)</NavLink>
//         </li>
//         </ul>
// </div>
// </nav>


