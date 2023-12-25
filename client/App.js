import {Routes,Route} from 'react-router-dom'
import Home  from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import PageNotFound from './Pages/PageNotFound';
import Register from "./Pages/Auth/Register"
import Login from './Pages/Auth/Login';
import Dashboard from "./Pages/user/Dashboard"
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminRoute from './src/components/Routes/Adminroute';
import Createcatagory from './src/Pages/Admin/Createcatagory';
import Createproduct from './src/Pages/Admin/Createproduct';
import Users from './src/Pages/Admin/Users';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />            
          <Route path="admin/create-category" element={<Createcatagory />} />            
          <Route path="admin/create-product" element={<Createproduct />} />            
          <Route path="admin/users" element={<Users />} />            
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/policy' element={<Policy/>} />
        <Route path='*' element={ <PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
