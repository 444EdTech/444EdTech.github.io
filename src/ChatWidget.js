// ChatWidget.js
import React, { useState, useRef } from 'react';
import { BsFillChatFill } from 'react-icons/bs'; // Importing the chat icon
import './ChatWidget.css'; // Assuming you have your CSS styles here

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatHistoryRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = async () => {
        if (userInput.trim() !== "") {
            // Add user message
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'human', text: userInput }
            ]);
            const userInputValue = userInput.trim();
            // Call API for bot response (mocked here)
            setLoading(true);
            setUserInput('');
            
            try {
                const botResponse = await generateResponse(userInputValue);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'bot', text: botResponse }
                ]);
            } catch (error) {
                console.error('Error fetching data from API:', error);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'bot', text: 'Sorry, I could not process your request at this time.' }
                ]);
            } finally {
                setUserInput('');
                if (chatHistoryRef.current) {
                    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight; // Scroll to bottom
                }
                setLoading(false);
            }
        }
    };

    const generateResponse = async (userMessage) => {
        try {
            // Build conversation history for the API
            const conversation = [
                { role: 'system', content: 'You are a helpful assistant.' },
                ...messages.map(msg => ({
                    role: msg.sender === 'human' ? 'user' : 'assistant',
                    content: msg.text,
                })),
                { role: 'user', content: userMessage }
            ];
    
            const apiKey = process.env.REACT_APP_SAMBANOVA_API_KEY;

            // Make the API call
            const response = await fetch('https://api.sambanova.ai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`, // Correct usage of template literal
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stream: true,
                    model: 'Meta-Llama-3.1-8B-Instruct',
                    messages: conversation,
                }),
            });

            
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // Stream the response
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let fullResponse = '';
    
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
    
                // Decode the chunk
                const chunk = decoder.decode(value, { stream: true });
    
                // Process each line in the chunk
                const lines = chunk.split('\n').filter(line => line.trim() !== '');
                lines.forEach(line => {
                    try {
                        // Remove the "data:" prefix
                        if (line.startsWith('data: ')) {
                            line = line.slice(6);
                        }
    
                        // Parse the JSON content
                        const parsedChunk = JSON.parse(line);
                        const delta = parsedChunk?.choices?.[0]?.delta?.content;
                        if (delta) {
                            fullResponse += delta; // Append content to the response
                        }
                    } catch (error) {
                        console.error('Error parsing chunk:', error, 'Chunk:', line);
                    }
                });
            }
    
            console.log('Complete response:', fullResponse);
            return fullResponse;
        } catch (error) {
            console.error('Error fetching data from API:', error);
            return 'Sorry, I could not process your request at this time.';
        }
    };

    
    return (
        <div>
            {/* Chat Icon */}
            <div className="chat-icon" onClick={toggleChat}>
                <BsFillChatFill size={30} color="white" />
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">Chat with Us</div>
                    <div className="chat-history" ref={chatHistoryRef}>
                        {messages.map((message, index) => (
                            <div key={index} className={`chat-message ${message.sender === 'human' ? 'user-message' : 'bot-message'}`}>
                                <p><strong>{message.sender === 'human' ? 'You:' : 'Bot:'}</strong> {message.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <textarea
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            rows="1"
                            placeholder="Type your message here..."
                            className="input-textarea"
                        />
                        <button onClick={sendMessage} disabled={loading} className="send-button">
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;