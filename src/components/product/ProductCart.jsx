import React, { useState, useRef, useEffect  } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"
import ProductDetailDialog from "./product_details/ProductDetailsDialog"
import { currencies } from "../../config/config"

export const ProductCart = ({ product }) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { id, cover, name, price } = product
  const dialogRef = useRef(null);
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <h3>{`${price} ${currencies[1]}`}</h3>
            <p>{name}</p>
          </div>

          <button onClick={addToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="product-detail-dialog-overlay" ref={dialogRef} >
          <div className="product-detail-dialog-container">
            <ProductDetailDialog product={product} onClose={handleDialogClose} />
          </div>
        </div>
      )
      }

    </>
  )
}
