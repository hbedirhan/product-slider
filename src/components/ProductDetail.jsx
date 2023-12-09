import React, { useState } from 'react';

function ProductDetail({ product }) {

    const [char, setChar] = useState('Yellow Gold')
    return (
        <>
            <div className="container mx-auto p-8">
                <div className="max-w-screen-lg mx-auto p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-['Montserrat-Medium'] mb-4">{product.title}</h2>
                    <img
                        src={product.images[char]}
                        alt={product.title}
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className='flex justify-between items-center mb-4'>
                        <p className="text-xl font-['Montserrat-Medium'] mb-4">{product.price}</p>
                        <p className="text-xl font-['Avenir-Book'] mb-4">{char}</p>
                        <div className="py-2">
                            <button
                                className={`cursor-pointer inline-block bg-[#E6CA97] rounded-full xl:w-8 xl:h-8 lg:w-6 lg:h-6 mr-5 sm:w-4 sm:h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
                                onClick={() => setChar('Yellow Gold')}>
                            </button>
                            <button
                                className={`cursor-pointer inline-block bg-[#D9D9D9] rounded-full xl:w-8 xl:h-8 lg:w-6 lg:h-6 mr-5 sm:w-4 sm:h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
                                onClick={() => setChar('White Gold')}>
                            </button>
                            <button
                                className={`cursor-pointer inline-block bg-[#E1A4A9] rounded-full xl:w-8 xl:h-8 lg:w-6 lg:h-6 sm:w-4 sm:h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
                                onClick={() => setChar('Rose Gold')}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductDetail;