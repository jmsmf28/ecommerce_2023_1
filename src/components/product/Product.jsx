import React, { useEffect, useState } from "react"
import { product } from "../../assets/data/data"
import "./product.css"
import { ProductCart } from "./ProductCart"
import { useSelector } from 'react-redux';


export const Product = () => {
  const [test, setTest] = useState()
  const productFromState = useSelector((state) => state.product);
  
  console.log("Test", test)
  
  useEffect(() => {
    setTest(productFromState)
  }  
  ,[productFromState])

  return (
    <>
      <section className='product'>
        <div className='container grid3'>
          {product.map((item) => (
            <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} />
          ))}
        </div>
      </section>
    </>
  )
}
