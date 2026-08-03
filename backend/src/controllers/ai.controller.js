const { generateAIResponse } = require("../services/ai.service");
// const { systemPrompt } = require("../prompts/dentalPrompt");

const chatWithAI = async (req, res) => {

    try {

        const { messages } = req.body;

        const allMessages = [
            {
                role: "user",
                content: systemPrompt
            },
            ...messages
        ];

        const reply = await generateAIResponse(allMessages);

        res.json({
            success: true,
            reply
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    chatWithAI
};