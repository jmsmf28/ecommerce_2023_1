import React from "react"
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"
import { currencies } from "../../config/config"

export const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch()

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }))
  }
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <>
      <div className='cardList' key={id}>
        <div className='cartContent'>
          <div className='img'>
            <img src={cover} alt='' />
            <button className='remove flexCenter'>
              <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            <p>{name}</p>
            <label htmlFor=''>Unit Price {price}{currencies[1]}</label>

            <div className='price'>
              <div className='qty flexCenter'>
                <button className='minus' onClick={descCartitems}>
                  <AiOutlineMinus />
                </button>
                <button className='num'>{quantity}</button>
                <button className='plus' onClick={incCartitems}>
                  <AiOutlinePlus />
                </button>
              </div>
              <div className='priceTitle'>{totalPrice}{currencies[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
