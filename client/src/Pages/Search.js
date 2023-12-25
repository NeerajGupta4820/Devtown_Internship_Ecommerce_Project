import React from 'react'
import { useSearch } from '../context/Search'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/cart'
import { toast } from 'react-hot-toast'
const Search = () => {
    const [values,setValues]=useSearch()
    const navigate = useNavigate();    
    const [cart, setCart] = useCart();
  return (
    <Layout title={'Search results'}>
      <div className='searchcontainer '>
        <div className='text-center'>
            <h1>Search Results</h1>
            <h6>{values?.results.length<1 ?'No Products Found' : `Found ${values?.results.length}`}</h6>
            <div className='secondaryhome'
          >
          {values?.results.map((p) => (
              
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
                    <div className='homebtn'>
                    <button className='btn btn-danger' onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                    <button className='btn btn-secondary' id='addtocart' onClick={()=>{setCart([...cart,p]);
                    toast.success('Item Added To Cart')}}>Add to cart</button>
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

export default Search
