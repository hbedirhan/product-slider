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
            // <div key={p.id} className="flex-shrink-0 max-w-md mr-40 overflow-hidden group">
            //   <img
            //     className="w-48 h-48 object-cover rounded-xl transition-transform transform group-hover:scale-110"
            //     src={p.images[selectedColors[p.id]] || p.images['Yellow Gold']}
            //     alt={`Product ${p.id}`}
            //   />
            //   <div className="py-4 font-['Montserrat-Medium']">
            //     <div className="text-sm mb-1">{p.title}</div>
            //     <p className="text-base">{p.price}</p>
            //   </div>
            //   <div className="py-2">
            //     <button
            //       className={`cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
            //       onClick={() => handleClick(p.id, 'Yellow Gold')}
            //     ></button>
            //     <button
            //       className={`cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
            //       onClick={() => handleClick(p.id, 'White Gold')}
            //     ></button>
            //     <button
            //       className={`cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black`}
            //       onClick={() => handleClick(p.id, 'Rose Gold')}
            //     ></button>
            //   </div>
            //   {selectedColors[p.id] && (
            //     <div className="inline-block font-['Avenir-Book'] text-sm">
            //       <p>{selectedColors[p.id]}</p>
            //     </div>
            //   )}
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;




// function Slider() {
//   const [char1, setChar1] = useState('Y');
//   const [text1, setText1] = useState('Yellow Gold');
//   const [char2, setChar2] = useState('Y');
//   const [text2, setText2] = useState('Yellow Gold');
//   const [char3, setChar3] = useState('Y');
//   const [text3, setText3] = useState('Yellow Gold');
//   const [char4, setChar4] = useState('Y');
//   const [text4, setText4] = useState('Yellow Gold');
//   const [char5, setChar5] = useState('Y');
//   const [text5, setText5] = useState('Yellow Gold');
//   const [char6, setChar6] = useState('Y');
//   const [text6, setText6] = useState('Yellow Gold');
//   const [char7, setChar7] = useState('Y');
//   const [text7, setText7] = useState('Yellow Gold');
//   const [char8, setChar8] = useState('Y');
//   const [text8, setText8] = useState('Yellow Gold');
  
//   const handleButtonClick = (newChar, newText) => {
//     setChar1(newChar);
//     setText1(newText);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <div className="relative overflow-hidden">
//         <div className="flex overflow-x-auto">
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl transition-transform transform group-hover:scale-110"
//                 src={`/images/EG009/EG009-${char1}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className='cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black' onClick={() => handleButtonClick('Y', 'Yellow Gold')}></button>
//                   <button className='cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black' onClick={() => handleButtonClick('W', 'White Gold')}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => handleButtonClick('R', 'Rose Gold')}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text1}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`/images/EG012/EG012-${char2}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 2</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className='cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black' onClick={() => {setChar2('Y'); setText2('Yellow Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar2('W'); setText2('White Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar2('R'); setText2('Rose Gold')}}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text2}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`/images/EG020/EG020-200P-${char3}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 3</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar3('Y'); setText3('Yellow Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar3('W'); setText3('White Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar3('R'); setText3('Rose Gold')}}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text3}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`/images/EG022/EG022-100P-${char4}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 4</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar4('Y'); setText4('Yellow Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar4('W'); setText4('White Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar4('R'); setText4('Rose Gold')}}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text4}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`/images/EG074/EG074-100P-${char5}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 5</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar5('Y'); setText5('Yellow Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar5('W'); setText5('White Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar5('R'); setText5('Rose Gold')}}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text5}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`/images/EG075/EG075-200P-${char6}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 6</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar6('Y'); setText6('Yellow Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar6('W'); setText6('White Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar6('R'); setText6('Rose Gold')}}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text6}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`/images/EG094/EG094-200P-${char7}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 7</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar7('Y'); setText7('Yellow Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar7('W'); setText7('White Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar7('R'); setText7('Rose Gold')}}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text7}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`/images/EG115/EG115-100P-${char8}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 8</div>
//                 <p className="text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                   <button className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-4 h-4 ms-1 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar8('Y'); setText8('Yellow Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-4 h-4 mr-1 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar8('W'); setText8('White Gold')}}></button>
//                   <button className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-4 h-4 focus:ring-1 focus:ring-offset-1 focus:ring-black" onClick={() => {setChar8('R'); setText8('Rose Gold')}}></button>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text8}</p>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default Slider;