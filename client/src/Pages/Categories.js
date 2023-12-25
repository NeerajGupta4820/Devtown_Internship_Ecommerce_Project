import React from 'react'
import Layout from '../components/Layout/Layout'
import { useCategory } from '../hooks/useCategory'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories=useCategory()
  return (
<Layout title={"All Categories"}>
      <div className="container" id='categorycontainer' style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-3 mb-3 gx-3 gy-3" key={c._id}>
              <div className="categorycard">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;