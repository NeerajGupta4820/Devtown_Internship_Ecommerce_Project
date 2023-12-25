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
import AdminRoute from './components/Routes/Adminroute';
import Createcategory from './Pages/Admin/Createcatagory'
import Createproduct from './Pages/Admin/Createproduct'
import Users from './Pages/Admin/Users'
import Orders from './Pages/user/Orders';
import Profile from './Pages/user/Profile';
import Products from './Pages/Admin/Products';
import UpdateProduct from './Pages/Admin/UpdateProduct';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';
import Categories from './Pages/Categories';
import CategoryProduct from './Pages/CategoryProduct';
import CartPage from './Pages/CartPage';
import AdminOrders from './Pages/Admin/AdminOrders';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:slug' element={<ProductDetails/>} />
        <Route path='/categories/' element={<Categories/>} />
        <Route path='/cart/' element={<CartPage/>} />
        <Route path='/category/:slug' element={<CategoryProduct/>} />
        <Route path='/search' element={<Search/>} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>} />
        <Route path="user/orders" element={<Orders/>} />
        <Route path="user/profile" element={<Profile/>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>} />
        <Route path="admin/create-category" element={<Createcategory/>} />
        <Route path="admin/create-product" element={<Createproduct/>} />
        <Route path="admin/product/:slug" element={<UpdateProduct/>} />
        <Route path="admin/products" element={<Products/>} />
        <Route path="admin/users" element={<Users/>} />
        <Route path="admin/orders" element={<AdminOrders/>} />
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
