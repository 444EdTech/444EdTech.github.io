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

    // const generateResponse = async (userMessage) => {
    //     try {
    //         // Build the prompt with conversation history
    //         const prompt = "Human: Hi you are an expert ChatBot. Please answer my questions." + messages.map(msg => `${msg.sender === 'human' ? 'Human' : 'Bot'}: ${msg.text}`).join('\n') + '\nHuman: ' + userMessage;
            
    //         // const response = await fetch('http://localhost:11434/api/generate', {
    //         //     method: 'POST',
    //         //     headers: {
    //         //         'Content-Type': 'application/json',
    //         //     },
    //         //     body: JSON.stringify({
    //         //         model: 'llama3.2',
    //         //         prompt: prompt, // Include conversation history
    //         //     }),
    //         // });

    //         const response = await fetch('https://api.sambanova.ai/v1/chat/completions', {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer 6636c1bb-5070-4d52-b0bd-7e94f45dc9a3`, // Replace with your Hugging Face API key
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 inputs: prompt, // Include conversation history and user input
    //             }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         // Create a reader to read the response stream
    //         const reader = response.body.getReader();
    //         const decoder = new TextDecoder('utf-8');
    //         let fullResponse = '';

    //         while (true) {
    //             const { value, done } = await reader.read();
    //             if (done) break; // Stop reading when done

    //             // Decode the chunk of data
    //             const chunk = decoder.decode(value, { stream: true });
                
    //             // Split into individual JSON strings if the response contains multiple
    //             const jsonLines = chunk.split('\n').filter(line => line.trim() !== '');
    //             jsonLines.forEach(line => {
    //                 try {
    //                     const parsedChunk = JSON.parse(line);
    //                     if (parsedChunk.response) {
    //                         fullResponse += parsedChunk.response; // Collect responses
    //                     }
    //                     console.log('Chunk received:', parsedChunk);
    //                 } catch (parseError) {
    //                     console.error('Error parsing chunk:', parseError);
    //                 }
    //             });
    //         }

    //         console.log('Complete response:', fullResponse);
    //         return fullResponse;

    //     } catch (error) {
    //         console.error('Error fetching data from API:', error);
    //         return 'Sorry, I could not process your request at this time.';
    //     }
    // };

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
    
            // Make the API call
            const response = await fetch('/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer 10947abe-52b0-4927-ba8a-9267994073a2',
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