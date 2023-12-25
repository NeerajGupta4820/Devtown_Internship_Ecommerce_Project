import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import {Toaster} from 'react-hot-toast'; 
const Layout = ({children,title,discription,keywords,author}) => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
            <meta name="description" content={discription} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
          <title>{title}</title>
      </Helmet>
      <Header/>
      <main style={{minHeight:'80vh'}}>
      <Toaster/>
      {children}
      </main>
      <Footer/>
    </div>
  )
}


Layout.defaultProps={
  title:'Ecommerce App Shop-now',
  description:'Mern stack project',
  keywords:'Mern,react,Node,mongodb',
  author:'Neeraj'
}
export default Layout
