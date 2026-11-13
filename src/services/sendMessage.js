import { profile } from "../data/portfolio";

// Messages / ratings seedha tumhare Gmail inbox me aate hain.
// 1) Web3Forms  -> profile.web3formsKey set ho (sabse reliable, web3forms.com se free key)
// 2) FormSubmit -> koi key nahi; pehle message par Gmail me ek "Activate Form" email aati hai, usse activate karo.
async function postJson(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* response JSON nahi hai */
  }
  const ok = data.success === true || data.success === "true";
  if (!res.ok || !ok) throw new Error(data.message || `Request failed (${res.status})`);
}

function deliver({ subject, fromName, fields }) {
  if (profile.web3formsKey) {
    return postJson("https://api.web3forms.com/submit", {
      access_key: profile.web3formsKey,
      subject,
      from_name: fromName,
      ...fields,
    });
  }
  return postJson(`https://formsubmit.co/ajax/${profile.email}`, {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    ...fields,
  });
}

export function sendMessage({ name, email, subject, message }) {
  return deliver({
    subject: subject.trim() || `Portfolio message from ${name}`,
    fromName: name,
    fields: { name, email, message },
  });
}

export function sendRating({ rating, comment }) {
  return deliver({
    subject: `Portfolio rating: ${rating}/5`,
    fromName: "Portfolio visitor",
    fields: {
      rating: `${rating} / 5`,
      message: comment.trim() || "(no comment)",
    },
  });
}
