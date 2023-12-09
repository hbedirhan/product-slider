import { useState, useEffect } from 'react'

function Popup() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      // 5 saniye sonra popup'ı göster
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);
  
      // Component kaldırıldığında veya başka bir etkileşim olduğunda timeout'u temizle
      return () => clearTimeout(popupTimer);
    }, []); // Boş dependency array, useEffect'in yalnızca bir kere çağrılmasını sağlar
  
    return (
      <div>
        {showPopup && (
          <div className="popup">
            {/* Popup içeriği buraya gelebilir */}
            İndirim zamanı!
          </div>
        )}
      </div>
    );
}

export default Popup