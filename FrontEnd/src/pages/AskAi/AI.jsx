import React, { useState } from 'react';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';

const AI = () => {
    const [userInput, setUserInput] = useState('');
    const [aiResponse, setAIResponse] = useState('');

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleAsk = async () => {
        try {
            const apiKey=process.env.REACT_APP_OPENAI_API_KEY;

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`

                },
                body: JSON.stringify({ text: userInput }),
            });
            const data = await response.json();
            setAIResponse(data.response);
            console.log(data.response);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setAIResponse('Error fetching AI response. Please try again.');
        }
    };

    return (
        <div className="bg-gray-900 h-full">
            <Sidebar />
            <section className="bg-gray-900 text-white min-h-screen ml-28 mt-8">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Ask AI 🤖</h2>
                        <div className="flex items-center space-x-4">
                            <input
                                className="flex-1 bg-gray-800 border-gray-700 focus:border-gray-500 focus:ring-gray-500 rounded-sm p-6"
                                placeholder="Type your question here..."
                                type="text"
                                value={userInput}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                onClick={handleAsk}
                            >
                                Ask
                            </button>
                        </div>
                        <div className="bg-gray-800 rounded-md p-4">
                            <p>{aiResponse || 'Your AI response will be displayed here.'}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AI;
