import { useState } from "react";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const getResponse = (text) => {
        const msg = text.toLowerCase();

        if (msg.includes("service"))
            return "We provide medical camps and emergency response services.";
        if (msg.includes("volunteer"))
            return "You can register as a volunteer using our registration form.";
        if (msg.includes("contact"))
            return "You can contact us at ngohealth@support.org.";
        if (msg.includes("emergency"))
            return "In case of emergency, please call 108 immediately.";

        return "Please ask about services, volunteer, contact, or emergency.";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const response = getResponse(input);

        setMessages([...messages, { user: input, bot: response }]);
        setInput("");
    };

    return (
        <div className="card">
            <h2>FAQ Chatbot</h2>

            <div className="chatbox">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p><strong>You:</strong> {msg.user}</p>
                        <p><strong>Bot:</strong> {msg.bot}</p>
                    </div>
                ))}
            </div>

            <input
                type="text"
                placeholder="Ask about services, volunteer, contact..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default Chatbot;
