const axios = require('axios');
require('dotenv').config();

module.exports = (app) => {
    app.post('/chat/ai', async (req, res) => {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        console.log(`Using API key: ${process.env.GEMINI_API_KEY}`);

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
                {
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: prompt }]
                        }
                    ]
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Gemini AI API response:', response.data);

            if (response.data && response.data.candidates && response.data.candidates.length > 0 && response.data.candidates[0].content && response.data.candidates[0].content.parts && response.data.candidates[0].content.parts.length > 0) {
                res.json({ response: response.data.candidates[0].content.parts[0].text.trim() });
            } else {
                throw new Error('Unexpected response format');
            }
        } catch (error) {
            console.error('Error fetching response from Gemini AI API:', error.response ? error.response.data : error.message);
            res.status(500).json({ error: 'Failed to fetch response from Gemini AI API' });
        }
    });
};
