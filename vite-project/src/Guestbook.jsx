import React, { useState, useEffect } from "react";
import { supabase } from "./supabase"; // Import Supabase connection

const Guestbook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch comments from Supabase on page load
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("guestbook")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching comments:", error);
      else setComments(data);
    };

    fetchComments();
  }, []);

  // ✅ Insert comment into Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return alert("Please enter all fields.");

    setLoading(true); // Show loading state

    const { data, error } = await supabase.from("guestbook").insert([{ name, message }]);

    setLoading(false); // Hide loading state

    if (error) {
      console.error("Error inserting comment:", error);
      alert("Failed to submit comment. Check the console.");
      return;
    }

    // ✅ Update the UI immediately with the new comment
    setComments([{ id: Date.now(), name, message, created_at: new Date().toISOString() }, ...comments]);
    
    // ✅ Clear the form fields
    setName("");
    setMessage("");
  };

  return (
    <div className="guestbook">
      <h2>Guestbook</h2>

      {/* ✅ Comment Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* ✅ Display Comments */}
      <div className="comments">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p><strong>{comment.name}</strong></p>
              <p>{comment.message}</p>
              <small>{new Date(comment.created_at).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Guestbook;
