import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (item, cantidad) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prod) => prod.id === item.id);
      if (existingItem) {
        setTotal((prevTotal) => prevTotal + item.price * cantidad);
        return prevItems.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + cantidad }
            : prod
        );
      } else {
        setTotal((prevTotal) => prevTotal + item.price * cantidad);
        return [...prevItems, { ...item, quantity: cantidad }];
      }
    });
    setCountCart((prevCount) => prevCount + cantidad);
  };

  const removeToCart = (item) => {
    setCartItems((prevItems) => {
        const existingItem = prevItems.find((prod) => prod.id === item.id);
        if (existingItem) {
            if (existingItem.quantity === 1) {
                setTotal((prevTotal) => prevTotal - item.price * existingItem.quantity);
                return prevItems.filter((prod) => prod.id !== item.id);
            } else {
                setTotal((prevTotal) => prevTotal - item.price);
                return prevItems.map((prod) =>
                    prod.id === item.id ? { ...prod, quantity: prod.quantity - 1 } : prod
                );
            }
        }
        return prevItems;
    });
    setCountCart((prevCount) => prevCount - 1);
};


  return (
    <CartContext.Provider value={{ cartItems, countCart, total, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};
