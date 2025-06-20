import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const itemExists = prev.find(item => item.title === product.title);
            if (itemExists) {
                return prev.map(item =>
                    item.title === product.title
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    // Removing by index
    const removeFromCartByIndex = (index) => {
        setCartItems(prev => {
            const updatedItems = [...prev];
            updatedItems.splice(index, 1);
            return updatedItems;
        });
    };

    const updateQuantityByIndex = (index, quantity) => {
        setCartItems(prev => {
            const updatedItems = [...prev];
            updatedItems[index].quantity = quantity;
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            addToCart,
            removeFromCartByIndex,
            updateQuantityByIndex,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

