import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import {  useParams,useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useCart } from "../context/cart";

const ProductDetails = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } 
    catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
    <div className='productdetails'>
    <div className='row container' id='productdetailsrow'>
        <div className='col-md-6 ps-5'>
        <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="70%"
            width="80%"
        />
                
        </div>
        <div className='col-md-6 ps-5'>
            <h1 className='text-center'>Product Details</h1>
            <h5>{product.name}</h5>
            <h6>{product.description}</h6>
            <h2>Price:{product.price}</h2>            
            <h5>Category : {product?.category?.name}</h5>
            <h6>product details</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum minus corrupti nostrum et voluptates veniam expedita, dolorem itaque repudiandae commodi odit repellendus facere mollitia tenetur nisi quibusdam! Laboriosam amet consequuntur repudiandae aperiam earum porro ut ad aut molestias .</p>
            <button className='btn btn-secondary mt-3' id='addtocart' onClick={()=>{setCart([...cart,product]);
                    toast.success('Item Added To Cart')}}  >Add to cart</button>
        </div>
    </div>
    <hr/>
    <div className='row1'>
        <h1 className='relatedproduct text-center mb-5'>Related Product</h1>
        {relatedProducts.length<1 && <p className='text-center'>No Related Product Found</p>}
        <div className='secondaryhome'
          >
          {relatedProducts?.map((p) => (
              
                <div className="pro" id='homecontanier'>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,30)}...</p>
                    <p className="card-text">Rs.{p.price}</p>
                    <div className='homebtn' onClick={window.scrollTo(0,document.body.scrollTop)}>
                    <button className='btn btn-danger' onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                    <button className='btn btn-secondary' id='addtocart' onClick={()=>{setCart([...cart,p]);
                    toast.success('Item Added To Cart')}}  >Add to cart</button>
                    </div>
                  </div>
                </div>
               
            ))}
          </div>
    </div>
    </div>
    </Layout>
  )
}

export default ProductDetails
