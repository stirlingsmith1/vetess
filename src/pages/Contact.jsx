import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#14224A]">
      <section className="bg-[#243866] px-6 py-24 text-center text-white">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="firstName" onChange={handleChange} placeholder="First Name" className="w-full border p-2" />
          <input name="lastName" onChange={handleChange} placeholder="Last Name" className="w-full border p-2" />
          <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" />
          <textarea name="message" onChange={handleChange} placeholder="Message" className="w-full border p-2" />

          <button className="bg-[#9D1C22] text-white px-6 py-2">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}