import React from 'react'
import ProductsData from '../ProductsData'
import { useNavigate, Outlet } from "react-router-dom";
import '../App.css'

export const BlogList = () => {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {ProductsData.map((product) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                navigate(`/blogs/blogList/${product.id}`);
              }}
              key={product.id}
            >
              <h1>{product.name}</h1> <p>{product.description}</p>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  )
}

