import React, { useState, useRef } from 'react';
import './ChatGPT.css'; // Assuming you will place the CSS in a separate file

const ChatGPT = () => {
    const [messages, setMessages] = useState([]); // Start with an empty message array
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatHistoryRef = useRef(null);

    const sendMessage = async () => {
        if (userInput.trim() !== "") {
            // Add user message
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'human', text: userInput } // Human message
            ]);

            // Call Ollama API for bot response
            setLoading(true); // Set loading state
            try {
                const botResponse = await generateResponse(userInput);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'bot', text: botResponse } // Bot response
                ]);
            } catch (error) {
                console.error('Error fetching data from Ollama API:', error);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'bot', text: 'Sorry, I could not process your request at this time.' }
                ]);
            } finally {
                // Clear input and scroll to bottom
                setUserInput('');
                if (chatHistoryRef.current) {
                    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
                }
                setLoading(false); // Reset loading state
            }
        }
    };

    const generateResponse = async (userMessage) => {
        try {
            // Build the prompt with conversation history excluding any initial messages
            const prompt = messages
                .map(msg => `${msg.sender === 'human' ? 'Human' : 'Bot'}: ${msg.text}`)
                .join('\n') + '\nHuman: ' + userMessage;

            const response = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama3.2',
                    prompt: prompt, // Include conversation history
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Create a reader to read the response stream
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let fullResponse = '';

            while (true) {
                const { value, done } = await reader.read();
                if (done) break; // Stop reading when done

                // Decode the chunk of data
                const chunk = decoder.decode(value, { stream: true });
                
                // Split into individual JSON strings if the response contains multiple
                const jsonLines = chunk.split('\n').filter(line => line.trim() !== '');
                jsonLines.forEach(line => {
                    try {
                        const parsedChunk = JSON.parse(line);
                        if (parsedChunk.response) {
                            fullResponse += parsedChunk.response; // Collect responses
                        }
                        console.log('Chunk received:', parsedChunk);
                    } catch (parseError) {
                        console.error('Error parsing chunk:', parseError);
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
        <div className="chat-container">
            <div className="chat-header">Chat with ChatGPT</div>
            <div className="chat-history" ref={chatHistoryRef}>
                {messages.length === 0 && (
                    <div className="start-message">
                        <p>Start your conversation</p>
                    </div>
                )}
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender === 'human' ? 'user-message' : 'bot-message'}`}>
                        <p><strong>{message.sender === 'human' ? 'You:' : 'ChatGPT:'}</strong> {message.text}</p>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    rows="2"
                    placeholder="Type your message here..."
                    className="input-textarea"
                />
                <button onClick={sendMessage} disabled={loading} className="send-button">
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default ChatGPT;