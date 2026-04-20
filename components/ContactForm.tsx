"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/gravity-form", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    setLoading(false);

    if (data.is_valid) {
      setSuccess(true);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="firstName" placeholder="First Name" className="w-full p-3 rounded bg-white/20 text-white" required />
      <input name="lastName" placeholder="Last Name" className="w-full p-3 rounded bg-white/20 text-white" required />
      <input name="phone" placeholder="Phone" className="w-full p-3 rounded bg-white/20 text-white" required />
      <input name="email" type="email" placeholder="Email" className="w-full p-3 rounded bg-white/20 text-white" required />
      <textarea name="message" placeholder="Message" className="w-full p-3 rounded bg-white/20 text-white" required />
      <button type="submit" className="bg-white text-black px-6 py-3 rounded w-full" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>

      {success && (
        <p className="text-green-400 text-center">Form submitted successfully!</p>
      )}
    </form>
  );
}

