import React, { useState } from "react";
import "./SubmitPrintForm.css";

const SubmitPrintForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState("");
  const [printer, setPrinter] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Confirmation modal
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return setError("Title is required");
    if (!fileUrl.trim() && !file) return setError("Either a File URL or file upload is required");
    if (!email.trim()) return setError("Email is required");

    setError("");

    const submission = {
      title: title.trim(),
      description: description.trim(),
      file_url: fileUrl.trim(),
      file: file,
      material: material.trim(),
      printer: printer.trim(),
      email: email.trim(),
    };

    setPendingSubmission(submission);
    setShowConfirm(true);
  };

  const confirmSubmission = async () => {
    if (!pendingSubmission) return;

    setLoading(true);

    let file_name = "";
    let file_url = pendingSubmission.file_url;

    // Handle file upload first if there is a file
    if (pendingSubmission.file) {
      const formData = new FormData();
      formData.append("file", pendingSubmission.file);

      try {
        const uploadRes = await fetch("http://localhost/printclub-api/uploadModel.php", {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadRes.json();
        if (!uploadData.success) throw new Error(uploadData.error || "Upload failed");
        file_name = uploadData.file_name;
        file_url = uploadData.file_url; // optional
      } catch (err) {
        setError("File upload failed: " + err.message);
        setLoading(false);
        return;
      }
    }

    // Send submission to DB
    try {
      const res = await fetch("http://localhost/printclub-api/addPrintSubmission.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: pendingSubmission.title,
          description: pendingSubmission.description,
          file_url,
          file_name,
          material: pendingSubmission.material,
          printer: pendingSubmission.printer,
          email: pendingSubmission.email,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Submission failed");

      // Reset form
      setTitle("");
      setDescription("");
      setFileUrl("");
      setFile(null);
      setMaterial("");
      setPrinter("");
      setEmail("");
      setPendingSubmission(null);
      setShowConfirm(false);
      setError("");
      onClose(); // optionally close form
    } catch (err) {
      setError("Submission failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="submit-print-form" onSubmit={handleSubmit}>
        <h2>Submit a 3D Print</h2>
        {error && <p className="error">{error}</p>}

        <label>Title*</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Print title" />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optional description" />

        <label>File URL</label>
        <input type="text" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} placeholder="Link to 3D model" />

        <label>Or Upload File</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} accept=".stl,.obj,.gcode,.3mf" />

        <label>Material</label>
        <input type="text" value={material} onChange={(e) => setMaterial(e.target.value)} placeholder="PLA, Resin, etc." />

        <label>Printer</label>
        <input type="text" value={printer} onChange={(e) => setPrinter(e.target.value)} placeholder="Printer name or ID" />

        <label>Contact Info*</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or contact info" />

        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button type="submit" style={{ flex: 1 }} disabled={loading}>Submit</button>
          <button type="button" style={{ flex: 1, background: "#ccc", color: "#111" }} onClick={onClose} disabled={loading}>Cancel</button>
        </div>
      </form>

      {showConfirm && (
        <div className="confirm-modal-backdrop">
          <div className="confirm-modal">
            <h3>Review Your Submission</h3>
            <p><strong>Title:</strong> {pendingSubmission.title}</p>
            <p><strong>Description:</strong> {pendingSubmission.description || "—"}</p>
            <p><strong>File URL:</strong> {pendingSubmission.file_url || "—"}</p>
            <p><strong>Uploaded File:</strong> {pendingSubmission.file ? pendingSubmission.file.name : "—"}</p>
            <p><strong>Material:</strong> {pendingSubmission.material || "—"}</p>
            <p><strong>Printer:</strong> {pendingSubmission.printer || "—"}</p>
            <p><strong>Email:</strong> {pendingSubmission.email}</p>

            <p style={{ marginTop: "10px", fontWeight: "600" }}>Are you sure you want to submit?</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
              <button className="confirm" onClick={confirmSubmission} disabled={loading}>
                {loading ? "Submitting..." : "Yes, Submit"}
              </button>
              <button className="cancel" onClick={() => setShowConfirm(false)} disabled={loading}>Go Back</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubmitPrintForm;
