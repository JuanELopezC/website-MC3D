import React, { useState } from "react";
import "./SubmitProjectForm.css";

const SubmitProjectForm = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [photos, setPhotos] = useState("");
    const [funFacts, setFunFacts] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [consent, setConsent] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingSubmission, setPendingSubmission] = useState(null);

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return setError("Title is needed");
        if (!description.trim()) return setError("Description is needed");
        if (!photos.trim()) return setError("Photos needed");
        if (!author.trim()) return setError("Author needed");
        if (!consent.trim()) return setError("Consent is needed (FRIES)");
        if (!contactInfo.trim()) return setError("Contact info required");

        setError("");

        const submission = {
            title: title.trim(),
            description: description.trim(),
            author: author.trim(),
            photos: photos.trim(),
            funFacts: funFacts.trim(),
            contactInfo: contactInfo.trim(),
            consent: consent.trim(),
        };

        setPendingSubmission(submission);
        setShowConfirm(true);
    };

    // Confirm submission
    const confirmSubmission = async () => {
        if (!pendingSubmission) return;

        setLoading(true);

        try {
            // Example API call (replace with your backend)
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Submitted:", pendingSubmission);

            // Reset form
            setTitle("");
            setDescription("");
            setAuthor("");
            setPhotos("");
            setFunFacts("");
            setContactInfo("");
            setConsent("");

            setPendingSubmission(null);
            setShowConfirm(false);

            if (onClose) onClose();
        } catch (err) {
            setError("Submission failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Submit Project</h2>

                {error && <p className="error">{error}</p>}

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Photos (URL)"
                    value={photos}
                    onChange={(e) => setPhotos(e.target.value)}
                />

                <textarea
                    placeholder="Fun Facts"
                    value={funFacts}
                    onChange={(e) => setFunFacts(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Contact Info"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Consent (FRIES)"
                    value={consent}
                    onChange={(e) => setConsent(e.target.value)}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>

            {showConfirm && (
                <div className="confirm-modal">
                    <p>Are you sure you want to submit?</p>
                    <button onClick={confirmSubmission} disabled={loading}>
                        Yes
                    </button>
                    <button onClick={() => setShowConfirm(false)}>
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default SubmitProjectForm;