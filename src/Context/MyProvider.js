// MyProvider.js
import React, { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import { useTranslation } from 'react-i18next';
import { Snackbar, Alert } from '@mui/material';
import { products } from '../data/data';

const initialValue = {
  user: null,
  basket: []
};

const MyProvider = ({ children }) => {
  // hooks 
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState();
  const [state, setState] = useState(initialValue);
  const [choosenProduct,setChoosenProduct] = useState({})
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [productStates, setProductStates] = useState(products.sex.map(card => ({
    id: card.id,
    basePrice: card.price,
    price: card.price,
    quantity: 1,
    type: 'generic', // Default to generic
    frequency: 'one month', // Default to one month
    tablets: 4,   // Default to 4 tablets
    title:card.title,
    description:card.description,
    instruction: card.instruction,
    last:card.last,
  })));

  // for updating sexual products
  const updatePrice = (productId, updateType, value) => {
    setProductStates(prevStates =>
      prevStates.map(product => {
        if (product.id === productId) {
          let newPrice = product.basePrice;

          // Update type
          if (updateType === 'type') {
            product.type = value;
          }

          // Update frequency
          if (updateType === 'frequency') {
            product.frequency = value;
          }

          // Update tablets
          if (updateType === 'tablets') {
            product.tablets = value;
          }

          // Determine the final price based on type and frequency
          if (product.type === 'generic') {
            newPrice = product.basePrice;
            if (product.frequency === 'two month') {
              newPrice *= 2;
            }
          } else if (product.type === 'brand') {
            newPrice *= 2;
            if (product.frequency === 'two month') {
              newPrice = newPrice + 100;
            }
          }

          // Adjust price based on the number of tablets
          if (product.tablets === 8) {
            newPrice += 80;
          } else if (product.tablets === 12) {
            newPrice += 120;
          }

          return { ...product, price: newPrice };
        }
        return product;
      })
    );
  };

  // Language
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  
  // add to cart 
  const addToBasket = (item) => {
  // Check if the item already exists in the basket
  const existingItemIndex = state.basket.findIndex((basketItem) => basketItem.id === item.id);
  if (existingItemIndex !== -1) {
    // If item exists, update its quantity by incrementing by 1
    const updatedBasket = [...state.basket];
    updatedBasket[existingItemIndex] = {
      ...updatedBasket[existingItemIndex],
      quantity: updatedBasket[existingItemIndex].quantity + 1,
    };
    setState({ ...state, basket: updatedBasket });
  } else {
    // If item doesn't exist, add it to the basket with quantity 1
    setState({ ...state, basket: [...state.basket, { ...item, quantity: 1 }] });
  }
};

  // Calculate basket total price
  const getBasketTotal = () => {
    let total = 0;
    state.basket?.map((item) => {
      return total += (item.price * item.quantity);
    });
    setPrice(total);
  };

  // Remove item from basket
  const handleRemove = (id) => {
    const arr = state.basket.filter((item) => item.id !== id); // delete element from array
    setState({ ...state, basket: arr });
    getBasketTotal();
  };

  // Show Snackbar
  const showSnackbar = (message, severity = 'success') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // Close Snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Calculate price on state change
  useEffect(() => {
    getBasketTotal();
  }, [state]);

  //to top
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
 // for add and rempve product from cart  
 const handleChangee = (item, d) =>{
  let ind = -1;
  state.basket.forEach((data, index)=>{
    if (data.id === item.id)
      ind = index;
  });
  const tempArr = state.basket;
  tempArr[ind].quantity += d;
  
  if (tempArr[ind].quantity === 0)
    tempArr[ind].quantity = 1;
          setState({...state, basket:[...tempArr]})
}

  return (
    <GlobalContext.Provider 
      value={{
        state,
        setState,
        show,
        price,
        setShow,
        language,
        t,
        i18n,
        setLanguage,
        handleRemove,
        getBasketTotal,
        showSnackbar,
        choosenProduct,
        setChoosenProduct,
        productStates,
        setProductStates,
        updatePrice,
        addToBasket,
        scrollToTop,
        handleChangee
      }}
    >
      {children}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </GlobalContext.Provider>
  );
};

export default MyProvider;
