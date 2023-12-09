import React, { useEffect, useState } from 'react';
import Card from './Card';
import products from './data/product';


function Slider() {
  const [selectedColors, setSelectedColors] = useState({});

  useEffect(() => {
    const initialColors = {};
    products.forEach((p) => {
      initialColors[p.id] = 'Yellow Gold';
    });
    setSelectedColors(initialColors);
  }, []);

  const handleClick = (id, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [id]: color,
    }));
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto">
          {products.map((product) => (
            <Card key={product.id} product={product} handleClick={handleClick} selectedColors={selectedColors}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;