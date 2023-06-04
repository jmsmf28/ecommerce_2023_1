import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Register } from "./pages/login/Register"
import { useSelector } from "react-redux"
import Shop  from "./pages/shops/Shop"

const App = () => {
  /* const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList) */

  return (
    <>
     {/*  {isLoggIn && ( */}
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/product_details' component={DetailsPages} />
          </Switch>
          <Footer />
        </Router>

{/*       {!isLoggIn && <Login />} */}
    </>
  )
}
export default App
