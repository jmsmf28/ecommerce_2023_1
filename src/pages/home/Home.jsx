import React, { useEffect } from "react"
import { Category } from "../../components/category/Category"
import { Order } from "../../components/hero/Order"
import { Slider } from "../../components/hero/Slider"
import { Product } from "../../components/product/Product"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Home = () => {
  const dispatch = useDispatch()

  const handleLogin = (e) => {
     // e.preventDefault()
      dispatch(authActions.login())
  }

  useEffect(() => {
    handleLogin()
  });
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  )
}
