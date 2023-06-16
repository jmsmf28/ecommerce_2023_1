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
import i18n from './i18n'
import { initReactI18next } from 'react-i18next';

const App = () => {
  /* const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList) */
  const selectedLanguage = useSelector((state) => state.app.selectedLanguage);
    i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({ lng: selectedLanguage })

  
    i18n.on('languageChanged', (newLanguage) => {
      console.log('Language changed:', newLanguage);
      // Perform actions or update your app based on the new language
    });

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
