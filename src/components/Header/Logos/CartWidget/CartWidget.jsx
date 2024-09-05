import React from 'react';

export const CartWidget = () => {
    return (
        <div className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
            </span>
        </div>
    );
};
