import React, { useEffect, useState } from "react";
import "./PrintQueue.css";

const PrintQueue = ({ onClose }) => {
  const [queue, setQueue] = useState([]);
  const [error, setError] = useState("");

  const fetchQueue = async () => {
    try {
      const res = await fetch("http://localhost/printclub-api/getPrintQueue.php");
      const data = await res.json();
      if (Array.isArray(data)) setQueue(data);
      else setError("Error loading queue.");
    } catch {
      setError("Server unreachable.");
    }
  };

  useEffect(() => {
    fetchQueue();
    // optional: refresh queue every 10s
    const interval = setInterval(fetchQueue, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="queue-overlay">
      <div className="queue-modal">
        <h2>Print Queue</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul className="queue-list">
          {queue.length === 0 && !error && <p>No prints yet.</p>}
          {queue.map((item) => (
            <li key={item.submission_id} className="queue-item">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <p><b>Status:</b> {item.status}</p>
              <p><b>Material:</b> {item.material}</p>
              <p><b>Printer:</b> {item.printer}</p>
              <p><b>Email:</b> {item.email}</p>
              <p>
                <b>File:</b>{" "}
                {item.file_url ? (
                  <a href={item.file_url} target="_blank" rel="noopener noreferrer">{item.file_name || "Link"}</a>
                ) : item.file_name ? (
                  <a href={`http://localhost/printclub-api/uploads/${item.file_name}`} target="_blank" rel="noopener noreferrer">{item.file_name}</a>
                ) : (
                  "—"
                )}
              </p>
            </li>
          ))}
        </ul>

        <button className="close-queue" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PrintQueue;
