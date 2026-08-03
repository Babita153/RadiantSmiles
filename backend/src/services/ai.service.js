const genAI = require("../config/gemini");

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

const generateAIResponse = async (messages) => {

    const chat = model.startChat({
        history: messages.slice(0, -1).map((msg) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }]
        }))
    });

    const result = await chat.sendMessage(
        messages[messages.length - 1].content
    );

    return result.response.text();
};

module.exports = {
    generateAIResponse
};