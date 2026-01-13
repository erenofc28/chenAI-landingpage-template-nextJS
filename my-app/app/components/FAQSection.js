"use client";

import { ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Question 1 text goes here",
    a: "Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question 2 text goes here",
    a: "Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    q: "Question 3 text goes here",
    a: "Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    q: "Question 4 text goes here",
    a: "Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    q: "Question 5 text goes here",
    a: "Lorem 5 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // close
          : [...prev, index] // open
    );
  };

  return (
    <section className="w-full bg-[#3F7FCF] py-24 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20">
        {/* LEFT CONTENT */}
        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold mb-6">FAQs</h2>

          <p className="text-white/80 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <button className="border border-white/60 px-6 py-3 rounded-md text-white hover:bg-white hover:text-[#3F7FCF] transition">
            Contact
          </button>
        </div>

        {/* RIGHT FAQ LIST */}
        <div className="space-y-10">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-white/40 pb-8">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left text-white font-semibold text-lg"
              >
                {item.q}
                <ChevronUp
                  className={`transition-transform ${
                    openItems.includes(index) ? "rotate-0" : "rotate-180"
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <p className="mt-4 text-white/80 leading-relaxed max-w-3xl">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
