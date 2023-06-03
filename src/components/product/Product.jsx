import React from "react"
import { product } from "../../assets/data/data"
import "./product.css"
import { ProductCart } from "./ProductCart"

export const Product = () => {
  return (
    <>
      <section className='product'>
        <div className='container grid3'>
          {product.map((item) => (
            <ProductCart key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  )
}
