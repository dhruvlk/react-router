import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../ProductsData"


const ProductDisplay = () => {
  const { id } = useParams();
  const product = ProductsData.find((o) => o.id === parseInt(id))
  return (
    <>
      <div className="listOfProducts">
        <div className="productDisplay">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay
