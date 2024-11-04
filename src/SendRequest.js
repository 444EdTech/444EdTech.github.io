import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SendRequest.css';

const SendRequest = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const alumni = location.state?.alumni;
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [senderEmail, setSenderEmail] = useState(''); // New state for sender's email

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to send
        const data = {
            userName,
            alumniName: alumni.name,
            alumniEmail: alumni.email,
            message,
            senderEmail
        };

        // Send data to Google Apps Script via POST request
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz_5_sEDx3xlXjpP0iEwN0t20Hu8sP7AMIOPnIX4pD_HXIqRi7VQr_p5MYFpvamFQ-6ug/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data),
            });

            if (response.ok) {
                alert('Connection request sent successfully!');
                setMessage(''); // Clear the message input after submission
                setUserName(''); // Clear the username input after submission
                setSenderEmail(''); // Clear the sender email input after submission
            } else {
                alert('Failed to send connection request.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send connection request.');
        }
    };

    return (
        <div className="send-request-container" style={{ padding: '100px' }}>
            <h2>Send Connection Request</h2>
            <h6>Tell why you want to connect with <strong>{alumni.name}</strong>.</h6>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Your Name:</label>
                    <input 
                        type="text" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="senderEmail">Your Email:</label>
                    <input 
                        type="email" 
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="message">Your Message:</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default SendRequest;