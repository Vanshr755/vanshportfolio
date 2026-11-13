import { useState } from "react";
import { FaStar, FaRegStar, FaCircleCheck } from "react-icons/fa6";
import { sendRating } from "../services/sendMessage";

const LABELS = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];
const STORAGE_KEY = "portfolio-rating";

const readSaved = () => {
  try {
    const n = Number(localStorage.getItem(STORAGE_KEY));
    return n >= 1 && n <= 5 ? n : 0;
  } catch {
    return 0;
  }
};

export default function Rating() {
  const [saved, setSaved] = useState(readSaved); // is browser se pehle di hui rating
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [errorText, setErrorText] = useState("");
  const [editing, setEditing] = useState(false);

  const shown = hover || rating;

  const submit = async () => {
    if (!rating) return;
    setStatus("sending");
    setErrorText("");
    try {
      await sendRating({ rating, comment });
      try { localStorage.setItem(STORAGE_KEY, String(rating)); } catch { /* ignore */ }
      setSaved(rating);
      setEditing(false);
      setComment("");
      setStatus("idle");
    } catch (err) {
      console.error("Rating error:", err);
      setErrorText(err?.message || "Network error");
      setStatus("error");
    }
  };

  const done = saved && !editing;

  return (
    <div className="rating-card">
      <div className="rating-card__intro">
        <h3>Rate my portfolio</h3>
        <p>Liked what you saw? Tell me how I did. Your rating comes straight to me.</p>
      </div>

      {done ? (
        <div className="rating-done">
          <FaCircleCheck />
          <div>
            <strong>Thanks for rating!</strong>
            <span className="rating-stars rating-stars--static" aria-label={`You rated ${saved} out of 5`}>
              {[1, 2, 3, 4, 5].map((n) => (n <= saved ? <FaStar key={n} /> : <FaRegStar key={n} />))}
            </span>
          </div>
          <button type="button" className="btn btn--light btn--sm" onClick={() => { setEditing(true); setRating(saved); }}>
            Change rating
          </button>
        </div>
      ) : (
        <div className="rating-form">
          <div className="rating-row">
            <div className="rating-stars" role="radiogroup" aria-label="Rate this portfolio from 1 to 5 stars" onMouseLeave={() => setHover(0)}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={rating === n}
                  aria-label={`${n} star${n > 1 ? "s" : ""} - ${LABELS[n]}`}
                  className={n <= shown ? "is-on" : ""}
                  onMouseEnter={() => setHover(n)}
                  onFocus={() => setHover(n)}
                  onBlur={() => setHover(0)}
                  onClick={() => setRating(n)}
                >
                  {n <= shown ? <FaStar /> : <FaRegStar />}
                </button>
              ))}
            </div>
            <span className="rating-label" aria-live="polite">{shown ? LABELS[shown] : "Tap a star"}</span>
          </div>

          <textarea
            className="rating-comment"
            rows="2"
            maxLength={300}
            placeholder="Any feedback? (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="rating-actions">
            <button type="button" className="btn btn--primary" onClick={submit} disabled={!rating || status === "sending"}>
              {status === "sending" ? "Submitting..." : "Submit rating"}
            </button>
            {editing && (
              <button type="button" className="btn btn--light" onClick={() => { setEditing(false); setStatus("idle"); }}>
                Cancel
              </button>
            )}
          </div>

          {status === "error" && (
            <div className="form-error" role="alert">
              Rating could not be sent{errorText ? ` (${errorText})` : ""}. Please try again in a moment.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
