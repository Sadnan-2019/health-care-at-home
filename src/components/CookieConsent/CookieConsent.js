import React, { useState } from "react";
// import CookieConsent from "react-cookie-consent";

const CookieConsent = () => {

    const [showBanner, setShowBanner] = useState(true); // Always show on reload

  const handleAccept = () => {
    setShowBanner(false); // Hides only for the current session
  };

  const handleDecline = () => {
    setShowBanner(false); // Hides only for the current session
  };
  return (
<div>
    {showBanner && (
        <div style={{ 
          position: "fixed", 
          bottom: 0, 
          width: "100%", 
          background: "#2B373B", 
          color: "#fff", 
          padding: "10px", 
          textAlign: "center", 
          zIndex: 1000 
        }}>
          <p>We use cookies to ensure the best experience on our website.</p>
          <button onClick={handleAccept} 
            style={{ background: "#008CBA", color: "#fff", padding: "8px 15px", margin: "5px", border: "none", cursor: "pointer" }}>
            Allow
          </button>
          <button onClick={handleDecline} 
            style={{ background: "#d9534f", color: "#fff", padding: "8px 15px", margin: "5px", border: "none", cursor: "pointer" }}>
            Refuse
          </button>
          {/* <a href="/privacy-policy" style={{ marginLeft: "10px", color: "#00C6FF" }}>Privacy Policy</a> */}
        </div>
      )}
    
    </div>
  );
};

export default CookieConsent;
