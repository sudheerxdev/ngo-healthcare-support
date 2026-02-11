export function analyzeProblem(description) {
    const text = description.toLowerCase();
    let urgency = "Low";

    if (
        text.includes("blood") ||
        text.includes("accident") ||
        text.includes("unconscious")
    ) {
        urgency = "Emergency";
    } else if (
        text.includes("fever") ||
        text.includes("pain") ||
        text.includes("infection")
    ) {
        urgency = "Medium";
    }

    const summary = `Patient reports: "${description}". Case classified as ${urgency} urgency.`;

    return { urgency, summary };
}
