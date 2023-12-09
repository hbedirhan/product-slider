import { useState, useEffect } from 'react';

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(popupTimer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
          <div className="z-10 bg-white p-4 rounded w-96">
            <div className="flex justify-end">
              <button onClick={handleClose} className="text-gray-600 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center font-['Avenir-Book']">MY JEWELRY STORE</h2>
            <p className="font-['Avenir-Book']">Sign up for My Jewelry Store and get a 10% discount!</p>
            <div className="mt-4">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter a Email Adress"
              />
            </div>
            <button className="mt-4 cursor-pointer border border-solid border-slate-950 rounded p-2 hover:bg-black hover:text-white focus:outline-none focus:bg-black focus:text-white active:bg-black active:text-white font-['Montserrat-Medium']">
              Sign up
            </button>
            <div className="mt-4">
              <input type="checkbox" id="privacyPolicy" className="mr-2" />
              <label htmlFor="privacyPolicy" className="text-sm text-gray-700 font-['Avenir-Book']">
                I agree to the privacy and security policy.
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
