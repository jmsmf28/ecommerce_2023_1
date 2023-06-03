import React, { useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"
import ProductDetailDialog from "./product_details/ProductDetailsDialog"

export const ProductCart = ({ product }) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { id, cover, name, price } = product
  console.log("Product", product)
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }
  const handleProductDetails = () => {
    setIsOpen(true)
    console.log("Handle funciona")
  }

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='img'>
          <div onClick={() => handleProductDetails()}>
            <img src={cover} alt='cover' />
          </div>
        </div>
        <div className='details'>
          <div onClick={() => handleProductDetails()}>
            <h3>${price}</h3>
            <p>{name}</p>
          </div>

          <button onClick={addToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="product-detail-dialog-overlay">
          <div className="product-detail-dialog-container">
            <ProductDetailDialog product={product} onClose={handleDialogClose} />
          </div>
        </div>
      )
      }

    </>
  )
}
