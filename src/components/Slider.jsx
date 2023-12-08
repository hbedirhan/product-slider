import React, { useEffect, useState } from 'react'

const products = [
  {
    'id': 1,
    'title': 'Engagement Ring 1',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG009/EG009-Y.jpg',
      'White Gold': 'public/images/EG009/EG009-W.jpg',
      'Rose Gold': 'public/images/EG009/EG009-R.jpg'
    }
  },
  {
    'id': 2,
    'title': 'Engagement Ring 2',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG012/EG012-Y.jpg',
      'White Gold': 'public/images/EG012/EG012-W.jpg',
      'Rose Gold': 'public/images/EG012/EG012-R.jpg'
    }
  },
  {
    'id': 3,
    'title': 'Engagement Ring 3',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG020/EG020-200P-Y.jpg',
      'White Gold': 'public/images/EG020/EG020-200P-W.jpg',
      'Rose Gold': 'public/images/EG020/EG020-200P-R.jpg'
    }
  },
  {
    'id': 4,
    'title': 'Engagement Ring 4',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG022/EG022-100P-Y.jpg',
      'White Gold': 'public/images/EG022/EG022-100P-W.jpg',
      'Rose Gold': 'public/images/EG022/EG022-100P-R.jpg'
    }
  },
  {
    'id': 5,
    'title': 'Engagement Ring 5',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG074/EG074-200P-Y.jpg',
      'White Gold': 'public/images/EG074/EG074-200P-W.jpg',
      'Rose Gold': 'public/images/EG074/EG074-200P-R.jpg'
    }
  },
  {
    'id': 6,
    'title': 'Engagement Ring 6',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG075/EG075-200P-Y.jpg',
      'White Gold': 'public/images/EG075/EG075-200P-W.jpg',
      'Rose Gold': 'public/images/EG075/EG075-200P-R.jpg'
    }
  },
  {
    'id': 7,
    'title': 'Engagement Ring 7',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG094/EG094-200P-Y.jpg',
      'White Gold': 'public/images/EG094/EG094-200P-W.jpg',
      'Rose Gold': 'public/images/EG094/EG094-200P-R.jpg'
    }
  },
  {
    'id': 8,
    'title': 'Engagement Ring 8',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': 'public/images/EG115/EG115-100P-Y.jpg',
      'White Gold': 'public/images/EG115/EG115-100P-W.jpg',
      'Rose Gold': 'public/images/EG115/EG115-100P-R.jpg'
    }
  },

]

// function Slider() {

//   const [char, setChar] = useState('Yellow Gold');

//   const handleClick = (id, key) => {
//     console.log('id:' +id + ' key:'+ key );

//   }

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <div className="relative overflow-hidden">
//         <div className="flex overflow-x-auto">
//           {products.map((p) => (
//             <div key={p.id} className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img className="w-48 h-48 object-cover rounded-xl" src={p.images[char]} alt={`Product ${p.id}`} />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">{p.title}</div>
//                 <p className="text-gray-700 text-base">
//                   {p.price}
//                 </p>
//               </div>
//               <div className="py-2">
//                 <span className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleClick(p.id, 'Yellow Gold')}>o</button>
//                 </span>
//                 <span className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]">
//                   <button onClick={() => handleClick(p.id, 'White Gold')}>o</button>
//                 </span>
//                 <span className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]">
//                   <button onClick={() => handleClick(p.id, 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//               <div className="inline-block font-['Avenir-Book'] text-sm">
//                 {/* <p>{char}</p> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Slider

function Slider() {
  const [char, setChar] = useState('Yellow Gold');
  const [activeProductId, setActiveProductId] = useState(1);

  const handleClick = (id, key) => {
    setActiveProductId(id);
    setChar(key);
  };


  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto">
          {products.map((p) => (
            <div key={p.id} className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={p.id === activeProductId ? p.images[char] : p.images['Yellow Gold']}
                alt={`Product ${p.id}`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">{p.title}</div>
                <p className="text-gray-700 text-base">{p.price}</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => handleClick(p.id, 'Yellow Gold')}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => handleClick(p.id, 'White Gold')}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => handleClick(p.id, 'Rose Gold')}>o</button>
                </span>
              </div>
              {p.id === activeProductId && (
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{char}</p>
                </div>
              )}
            </div>
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
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char1}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text1}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char2}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text2}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char3}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text3}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char4}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text4}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char5}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text5}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char6}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text6}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char7}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{text7}</p>
//                 </div>
//             </div>
//             <div className="flex-shrink-0 max-w-md mr-40 bg-white overflow-hidden">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl"
//                 src={`public/images/EG009/EG009-${char8}.jpg`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">Engagement Ring 1</div>
//                 <p className="text-gray-700 text-base">$101.00 USD</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
//                 </span>
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