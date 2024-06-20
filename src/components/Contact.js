// import React from "react";

// const Contact = () => {
//   return (
//     <div className="contact-page-wrapper">
//       <h1 className="primary-heading">Have Question In Mind?</h1>
//       <h1 className="primary-heading">Let Us Help You</h1>
//       <div className="contact-form-container">
//         <input type="text" placeholder="contact us " />
//         <button className="secondary-button" >Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleWhatsAppSubmit = () => {
        const phoneNumber = '9503636172'; // Replace with your WhatsApp number
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Have Question In Mind?</h1>
            <h1 className="primary-heading">Let Us Help You</h1>
            <div className="contact-form-container">
                <input
                    type="text"
                    placeholder="Send us your thoughts"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="secondary-button" onClick={handleWhatsAppSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Contact;
