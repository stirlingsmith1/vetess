import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { supabase } from "src/lib/supabase.js";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submission:", formData);

    // Supabase disabled for now
    /*
    await supabase.from("submissions").insert([
      {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
    ]);
    */

    // reset form after submit
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      role: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#14224A]">
      <section className="bg-[#243866] px-6 py-24 text-center text-white">
        <h1 className="font-serif text-5xl font-bold md:text-6xl">
          Get In Touch
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm text-white/80 md:text-base">
          Have questions? We are here to help veterans and employers connect.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.25fr]">
        {/* LEFT PANEL */}
        <div className="rounded-2xl bg-[#243866] p-8 text-white shadow-lg">
          <h2 className="font-serif text-2xl font-bold">
            Contact Information
          </h2>

          <div className="mt-8 space-y-6">
            <ContactInfoItem icon={<Mail size={18} />} label="Email" value="info@vetbridge.org" />
            <ContactInfoItem icon={<Phone size={18} />} label="Phone" value="(800) VET-HELP" />
            <ContactInfoItem
              icon={<MapPin size={18} />}
              label="Address"
              value={
                <>
                  1234 Veterans Way
                  <br />
                  Washington, DC 20001
                </>
              }
            />
            <ContactInfoItem
              icon={<Clock size={18} />}
              label="Hours"
              value={
                <>
                  Mon-Fri: 8am - 6pm EST
                  <br />
                  Sat-Sun: Closed
                </>
              }
            />
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="mb-4 text-sm text-white/60">Follow Us</p>

            <div className="flex gap-3">
              <SocialIcon icon={<span className="text-xs">in</span>} />
              <SocialIcon icon={<span className="text-xs">f</span>} />
              <SocialIcon icon={<span className="text-xs">ig</span>} />
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-2xl border border-[#E6D7BD] bg-white p-8 shadow-lg">
          <h2 className="font-serif text-2xl font-bold text-[#243866]">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="First Name *" placeholder="John" name="firstName" value={formData.firstName} onChange={handleChange} />
              <FormField label="Last Name *" placeholder="Smith" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Email *" placeholder="john@email.com" name="email" value={formData.email} onChange={handleChange} />
              <FormField label="Phone" placeholder="(555) 123-4567" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <FormField label="I am a... *" placeholder="" name="role" value={formData.role} onChange={handleChange} />
            <FormField label="Subject *" placeholder="How can we help you?" name="subject" value={formData.subject} onChange={handleChange} />

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#14224A]">
                Message *
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="7"
                placeholder="Tell us more about your inquiry..."
                className="w-full resize-none rounded-lg border border-[#D8BE8A] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#9D1C22]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#9D1C22] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#7F151A]"
            >
              Send Message
            </button>

            <p className="text-center text-xs text-gray-500">
              We typically respond within 24 business hours.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTS */

function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A51E25] text-white">
        {icon}
      </div>

      <div>
        <p className="text-sm text-white/50">{label}</p>
        <div className="mt-1 text-sm font-bold leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
    >
      {icon}
    </a>
  );
}

function FormField({ label, placeholder, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#14224A]">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#D8BE8A] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#9D1C22]"
      />
    </div>
  );
}