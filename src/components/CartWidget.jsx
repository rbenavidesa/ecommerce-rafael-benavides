import React from 'react';
import { ShoppingBagIcon} from '@heroicons/react/outline';

export const CartWidget = () => {
    return (
           
        <div className="ml-4 flow-root lg:ml-6">
            <a href="#" className="group -m-2 p-2 flex items-center">
            <ShoppingBagIcon
                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-800">0</span>
            <span className="sr-only">items in cart, view bag</span>
            </a>
        </div>
    );
};

export default CartWidget;

