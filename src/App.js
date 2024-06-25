import './App.css';
import { useContext,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Main from './components/Main/Main';
import Sex from './components/sex/Sex';
// import About from './components/About/About';
// import Contact from './components/Contacts/Contacts';
import { ThemeProvider } from '@mui/material';
import { useMode } from './Context/ThemeContext';
import { ColorModeContext, tokens } from './Context/ThemeContext';
import Cart from './components/cart/Cart';
import NotFound from './components/notFound/NotFound';
import Form from './components/Form/Form';
import LanguageButtons from './resuable-component/LanguageButtons';
import Footer from './components/Footer/Footer';
import GlobalContext from './Context/GlobalContext';
import WeigtManagment from './components/WeigtManagment/WeigtManagment';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import { auth } from './firebase';
import Mental from './components/mentalHealth/Mental';
import Hair from './components/hair/Hair';
import Order from './components/Order';

function App() {
  const [theme, toggleColorMode, mode] = useMode();
  const colors = tokens(theme.palette.mode);
  const {state,setState} = useContext(GlobalContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setState(prevState => ({ ...prevState, user: authUser.email }));
      } else {
        setState(prevState => ({ ...prevState, user: null }));
      }
    });
    // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={{ toggleColorMode, theme, mode }}>
        <div className="App"
          style={{
            backgroundColor: colors.primary[100],
            // direction: language==='en'? 'ltr':'rtl',
          }}> 
          {/* <Alert/> */}
          <Routes>
            <Route path="/" element={
              <>
              <NavBar/>
              <LanguageButtons/>
              <Main />
              <Footer/>
              </>
            }/>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget-Password" element={<ForgotPassword />} />
            <Route path="hair-loss" element={
              <>
                <NavBar/>
                <LanguageButtons/>
                <Hair/>
                <Footer/>
              </>
              }/>
            <Route path="weight-Loss" element={
              <>
                <NavBar/>
                <LanguageButtons/>
                <WeigtManagment />
                <Footer/>
              </>
              }/>
            <Route path="mental-Health" element={
              <>
               <NavBar/>
                <LanguageButtons/>
                <Mental />
                <Footer/>
              </>
              }/>
              <Route path="sexual-Health" element={
               <>
               <NavBar/>
                <LanguageButtons/>
                <Sex />
                <Footer/>
              </>
              }/>
            <Route path="/all-products" element={
                <>
                <NavBar/>
                 <LanguageButtons/>
                 <Products />
                 <Footer/>
               </>
              }/>
            <Route path="/product/:postId" element={
                <>
                <NavBar/>
                 <LanguageButtons/>
                 <ProductDetails />
                 <Footer/>
               </>
              }/>
            <Route path="Cart" element={
                 <>
                  <NavBar/>
                  <LanguageButtons/>
                  <Cart />
                  <Footer/>
                </>
              }/>
               <Route path="order" element={
                 <>
                  <NavBar/>
                  <LanguageButtons/>
                  <Order/>
                  <Footer/>
                </>
              }/>
            <Route path="Form" element={
               <>
                <NavBar/>
                <LanguageButtons/>
                <Form />
                <Footer/>
              </>
              }/>
            <Route path="*" element={
              <>
              <NotFound />
              {/* <Footer/> */}
              </>
              }/>
          </Routes>
        </div>  
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
