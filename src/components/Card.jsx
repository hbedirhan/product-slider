import React from 'react'

function Card( {product, char, activeProductId, handleClick} ) {
    return (
        <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden group">
            <img
                className="w-48 h-48 object-cover rounded-xl transition-transform transform group-hover:scale-110"
                src={product.id === activeProductId ? product.images[char] : product.images['Yellow Gold']}
                alt={`Product ${product.id}`}
            />
            <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">{product.title}</div>
                <p className="text-base">{product.price}</p>
            </div>
            <div className="py-2">
                <span
                    className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                    <button onClick={() => handleClick(product.id, 'Yellow Gold')}>o</button>
                </span>
                <span
                    className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                    <button onClick={() => handleClick(product.id, 'White Gold')}>o</button>
                </span>
                <span
                    className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                    <button onClick={() => handleClick(product.id, 'Rose Gold')}>o</button>
                </span>
            </div>
            {product.id === activeProductId && (
                <div className="inline-block font-['Avenir-Book'] text-sm">
                    <p>{char}</p>
                </div>
            )}
        </div>
    )
}

export default Card