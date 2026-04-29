"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SidebarForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      formId: 2,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/gravity-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      setLoading(false);

      if (data.is_valid) {
        router.push("/thank-you/");
        return;
      }

      alert("Something went wrong. Please try again.");
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Server error. Please try again.");
    }
  };

  const inputClass = "w-full p-4 rounded-sm bg-white text-[#002e3b] font-bold placeholder:text-[#002e3b]/50 focus:outline-none";

return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-4">
      <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-4">
        
        {/* First Name */}
        <div className="relative"><input name="firstName" placeholder="FIRST NAME *" className={inputClass} required /></div>

        {/* Last Name */}
        <div className="relative"><input name="lastName" placeholder="LAST NAME *" className={inputClass} required /></div>

        {/* Phone */}
        <div className="relative"><input name="phone" placeholder="PHONE *" className={inputClass} required /></div>

        {/* Email */}
        <div className="relative"><input name="email" type="email" placeholder="EMAIL *" className={inputClass} required /></div>
      </div>

      {/* Message - Full Width */}
      <div className="relative"><textarea name="message" placeholder="MESSAGE *" rows={5} className={`${inputClass} resize-none`} required /></div>

      {/* Submit Button - Centered */}
      <div className="flex justify-center pt-4">
        <button type="submit" className="bg-[#ff8227] hover:bg-[#e67320] text-white font-bold py-4 px-16 cursor-pointer rounded-lg uppercase tracking-widest transition-colors w-full min-[992px]:w-auto min-w-[250px]" disabled={loading} >{loading ? "SUBMITTING..." : "SUBMIT"}</button>
      </div>
    </form>
  );
}
