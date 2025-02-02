import React, { useContext } from 'react';
import { CartContext } from '../../../../Context/Context';  

export const CartWidget = () => {
    const { countCart } = useContext(CartContext);  

    return (
        <div className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {countCart} 
            </span>
        </div>
    );
};
