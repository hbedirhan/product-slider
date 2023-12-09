import React, { useEffect, useState } from 'react'

const products = [
  {
    'id': 1,
    'title': 'Engagement Ring 1',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG009/EG009-Y.jpg',
      'White Gold': '/images/EG009/EG009-W.jpg',
      'Rose Gold': '/images/EG009/EG009-R.jpg'
    }
  },
  {
    'id': 2,
    'title': 'Engagement Ring 2',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG012/EG012-Y.jpg',
      'White Gold': '/images/EG012/EG012-W.jpg',
      'Rose Gold': '/images/EG012/EG012-R.jpg'
    }
  },
  {
    'id': 3,
    'title': 'Engagement Ring 3',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG020/EG020-200P-Y.jpg',
      'White Gold': '/images/EG020/EG020-200P-W.jpg',
      'Rose Gold': '/images/EG020/EG020-200P-R.jpg'
    }
  },
  {
    'id': 4,
    'title': 'Engagement Ring 4',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG022/EG022-100P-Y.jpg',
      'White Gold': '/images/EG022/EG022-100P-W.jpg',
      'Rose Gold': '/images/EG022/EG022-100P-R.jpg'
    }
  },
  {
    'id': 5,
    'title': 'Engagement Ring 5',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG074/EG074-200P-Y.jpg',
      'White Gold': '/images/EG074/EG074-200P-W.jpg',
      'Rose Gold': '/images/EG074/EG074-200P-R.jpg'
    }
  },
  {
    'id': 6,
    'title': 'Engagement Ring 6',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG075/EG075-200P-Y.jpg',
      'White Gold': '/images/EG075/EG075-200P-W.jpg',
      'Rose Gold': '/images/EG075/EG075-200P-R.jpg'
    }
  },
  {
    'id': 7,
    'title': 'Engagement Ring 7',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG094/EG094-200P-Y.jpg',
      'White Gold': '/images/EG094/EG094-200P-W.jpg',
      'Rose Gold': '/images/EG094/EG094-200P-R.jpg'
    }
  },
  {
    'id': 8,
    'title': 'Engagement Ring 8',
    'price': '$101.00 USD',
    'images': {
      'Yellow Gold': '/images/EG115/EG115-100P-Y.jpg',
      'White Gold': '/images/EG115/EG115-100P-W.jpg',
      'Rose Gold': '/images/EG115/EG115-100P-R.jpg'
    }
  },

]

// function Slider() {
//   const [char, setChar] = useState('Yellow Gold');
//   const [activeProductId, setActiveProductId] = useState(1);

//   const handleClick = (id, key) => {
//     setActiveProductId(id);
//     setChar(key);
//   };


//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <div className="relative overflow-hidden">
//         <div className="flex overflow-x-auto">
//           {products.map((p) => (
//             <div key={p.id} className="flex-shrink-0 max-w-md mr-40 overflow-hidden group">
//               <img
//                 className="w-48 h-48 object-cover rounded-xl transition-transform transform group-hover:scale-110"
//                 src={p.id === activeProductId ? p.images[char] : p.images['Yellow Gold']}
//                 alt={`Product ${p.id}`}
//               />
//               <div className="py-4 font-['Montserrat-Medium']">
//                 <div className="text-sm mb-1">{p.title}</div>
//                 <p className="text-base">{p.price}</p>
//               </div>
//               <div className="py-2">
//                 <span
//                   className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
//                   <button onClick={() => handleClick(p.id, 'Yellow Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
//                 >
//                   <button onClick={() => handleClick(p.id, 'White Gold')}>o</button>
//                 </span>
//                 <span
//                   className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
//                 >
//                   <button onClick={() => handleClick(p.id, 'Rose Gold')}>o</button>
//                 </span>
//               </div>
//               {p.id === activeProductId && (
//                 <div className="inline-block font-['Avenir-Book'] text-sm">
//                   <p>{char}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Slider;




function Slider() {
  const [char1, setChar1] = useState('Y');
  const [text1, setText1] = useState('Yellow Gold');
  const [char2, setChar2] = useState('Y');
  const [text2, setText2] = useState('Yellow Gold');
  const [char3, setChar3] = useState('Y');
  const [text3, setText3] = useState('Yellow Gold');
  const [char4, setChar4] = useState('Y');
  const [text4, setText4] = useState('Yellow Gold');
  const [char5, setChar5] = useState('Y');
  const [text5, setText5] = useState('Yellow Gold');
  const [char6, setChar6] = useState('Y');
  const [text6, setText6] = useState('Yellow Gold');
  const [char7, setChar7] = useState('Y');
  const [text7, setText7] = useState('Yellow Gold');
  const [char8, setChar8] = useState('Y');
  const [text8, setText8] = useState('Yellow Gold');
  
  const handleButtonClick = (newChar, newText) => {
    setChar1(newChar);
    setText1(newText);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto">
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char1}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => handleButtonClick('Y', 'Yellow Gold')}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => handleButtonClick('W', 'White Gold')}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => handleButtonClick('R', 'Rose Gold')}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text1}</p>
                </div>
            </div>
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char2}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => {setChar2('Y'); setText2('Yellow Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => {setChar2('W'); setText2('White Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => {setChar2('R'); setText2('Rose Gold')}}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text2}</p>
                </div>
            </div>
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char3}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => {setChar3('Y'); setText3('Yellow Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => {setChar3('W'); setText3('White Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => {setChar3('R'); setText3('Rose Gold')}}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text3}</p>
                </div>
            </div>
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char4}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => {setChar4('Y'); setText4('Yellow Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => {setChar4('W'); setText4('White Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => {setChar4('R'); setText4('Rose Gold')}}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text4}</p>
                </div>
            </div>
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char5}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => {setChar5('Y'); setText5('Yellow Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => {setChar5('W'); setText5('White Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => {setChar5('R'); setText5('Rose Gold')}}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text5}</p>
                </div>
            </div>
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char6}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => {setChar6('Y'); setText6('Yellow Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => {setChar6('W'); setText6('White Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => {setChar6('R'); setText6('Rose Gold')}}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text6}</p>
                </div>
            </div>
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char7}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => {setChar7('Y'); setText7('Yellow Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => {setChar7('W'); setText7('White Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => {setChar7('R'); setText7('Rose Gold')}}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text7}</p>
                </div>
            </div>
            <div className="flex-shrink-0 max-w-md mr-40 overflow-hidden">
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={`/images/EG009/EG009-${char8}.jpg`}
              />
              <div className="py-4 font-['Montserrat-Medium']">
                <div className="text-sm mb-1">Engagement Ring 1</div>
                <p className="text-base">$101.00 USD</p>
              </div>
              <div className="py-2">
                <span
                  className="cursor-pointer inline-block bg-[#E6CA97] rounded-full w-5 h-5 mr-1 text-[#E6CA97]">
                  <button onClick={() => {setChar8('Y'); setText8('Yellow Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#D9D9D9] rounded-full w-5 h-5 mr-1 text-[#D9D9D9]"
                >
                  <button onClick={() => {setChar8('W'); setText8('White Gold')}}>o</button>
                </span>
                <span
                  className="cursor-pointer inline-block bg-[#E1A4A9] rounded-full w-5 h-5 text-[#E1A4A9]"
                >
                  <button onClick={() => {setChar8('R'); setText8('Rose Gold')}}>o</button>
                </span>
              </div>
                <div className="inline-block font-['Avenir-Book'] text-sm">
                  <p>{text8}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Slider;