import { useState } from "react";
import { FaPaperPlane, FaRegCopy, FaCheck, FaCircleCheck, FaEnvelope } from "react-icons/fa6";
import Section from "./Section";
import Reveal from "./Reveal";
import Rating from "./Rating";
import { sendMessage } from "../services/sendMessage";
import { contact, profile, socials } from "../data/portfolio";
import { linkProps } from "../utils/links";

const initial = { name: "", email: "", subject: "", message: "", botcheck: "" };

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = "Enter a valid email address";
  if (v.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

// Clipboard block ho to bhi copy ho jaye
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorText, setErrorText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    if (values.botcheck) return setStatus("success"); // honeypot: bots ko chup-chaap success dikha do

    setStatus("sending");
    setErrorText("");
    try {
      await sendMessage(values);
      setStatus("success");
      setValues(initial);
    } catch (err) {
      console.error("Contact form error:", err);
      setErrorText(err?.message || "Network error");
      setStatus("error");
    }
  };

  const handleCopy = async () => {
    if (await copyText(profile.email)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Form fail ho to visitor apne mail app se bhej sake (message bhara hua)
  const mailtoHref =
    `mailto:${profile.email}?subject=${encodeURIComponent(values.subject || `Portfolio message from ${values.name}`)}` +
    `&body=${encodeURIComponent(`${values.message}\n\n- ${values.name} (${values.email})`)}`;

  return (
    <Section id="contact" tag={contact.tag} title={contact.title}>
      <Reveal>
        <div className="contact-card">
          {/* ---------- Left: contact info ---------- */}
          <aside className="contact-info">
            <h3>Contact Information</h3>
            <p>{contact.text}</p>

            <ul className="info-list">
              {socials.map(({ label, href, icon: Icon }) => {
                const isEmail = label === "Email";
                return (
                  <li key={label} className="info-row">
                    <a href={href} {...linkProps(href)}>
                      <span className="info-icon"><Icon /></span>
                      <span className="info-text">
                        <small>{label}</small>
                        <strong>{isEmail ? profile.email : href.replace(/^https?:\/\/(www\.)?/, "")}</strong>
                      </span>
                    </a>
                    {isEmail && (
                      <button type="button" className="copy-btn" onClick={handleCopy} aria-label="Copy email" title={copied ? "Copied!" : "Copy email"}>
                        {copied ? <FaCheck /> : <FaRegCopy />}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="contact-status">
              <span className="dot" /> {contact.availability}
            </div>
          </aside>

          {/* ---------- Right: form ---------- */}
          <div className="contact-form-wrap">
            {status === "success" ? (
              <div className="form-success">
                <FaCircleCheck />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn--light" onClick={() => setStatus("idle")}>Send another message</button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <h3>Send me a message</h3>

                <div className="form__row">
                  <label>
                    Name
                    <input name="name" placeholder="Your name" value={values.name} onChange={handleChange} autoComplete="name" />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" placeholder="you@example.com" value={values.email} onChange={handleChange} autoComplete="email" />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </label>
                </div>

                <label>
                  <span>Subject <em>(optional)</em></span>
                  <input name="subject" placeholder="What is this about?" value={values.subject} onChange={handleChange} />
                </label>

                <label>
                  Message
                  <textarea name="message" rows="5" placeholder="How can I help you?" value={values.message} onChange={handleChange} />
                  {errors.message && <span className="error">{errors.message}</span>}
                </label>

                {/* honeypot (users ko nahi dikhta) */}
                <input className="hp" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" value={values.botcheck} onChange={handleChange} />

                <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                  <FaPaperPlane /> {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <div className="form-error" role="alert">
                    Message could not be sent{errorText ? ` (${errorText})` : ""}. Please try again, or{" "}
                    <a href={mailtoHref}><FaEnvelope /> send it from your email app</a>.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <Rating />
      </Reveal>
    </Section>
  );
}
