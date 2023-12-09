import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({ product, selectedColors, handleClick }) {
    return (
        <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden group">
            <NavLink to={`product/${product.id}`}>
                <img
                    className="w-48 h-48 object-cover rounded-xl transition-transform transform group-hover:scale-110"
                    src={product.images[selectedColors[product.id]] || product.images['Yellow Gold']}
                    alt={`Product ${product.id}`} />
            </NavLink>
            <div className="pt-4 pb-2 font-['Montserrat-Medium']">
                <div className="text-[15px] mb-1">{product.title}</div>
                <p className="text-[17px]">{product.price}</p>
            </div>
            <div className="pt-2">
                <button
                    className={`cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
                    onClick={() => handleClick(product.id, 'Yellow Gold')}>
                </button>
                <button
                    className={`cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
                    onClick={() => handleClick(product.id, 'White Gold')}>
                </button>
                <button
                    className={`cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
                    onClick={() => handleClick(product.id, 'Rose Gold')}>
                </button>
            </div>
            {selectedColors[product.id] && (
                <div className="inline-block font-['Avenir-Book'] text-[12px] ms-1">
                    <p>{selectedColors[product.id]}</p>
                </div>
            )}
        </div>
    )
}

export default Card