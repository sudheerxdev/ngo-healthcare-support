import { useState } from "react";
import { analyzeProblem } from "../utils/automation";

function SupportForm({ addRequest, showToast }) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        problem: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = analyzeProblem(form.problem);

        addRequest({ ...form, ...result });
        showToast("Request submitted successfully!");

        setForm({ name: "", phone: "", problem: "" });
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <h2>Patient Support Form</h2>

            <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
                type="text"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <textarea
                placeholder="Describe the problem..."
                required
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
            />

            <button type="submit">Submit Request</button>
        </form>
    );
}

export default SupportForm;
