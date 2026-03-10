import React from "react";

const testimonials = [
  {
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
    text: "Swift cut the busywork out of content production. I can draft, refine, and publish from one place instead of bouncing across tools.",
  },
  {
    name: "Richard Nelson",
    role: "SWE 2 @ Amazon",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    text: "The image and writing tools feel connected, not bolted together. That makes Swift much easier to use inside a real workflow.",
  },
  {
    name: "James Washington",
    role: "SWE 2 @ Google",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    text: "Resume review plus content generation in the same dashboard is a smart combination. Swift feels focused and practical.",
  },
];

const TestimonialCard = ({ image, name, role, text }) => (
  <div className="w-80 rounded-3xl border border-sky-100 bg-white/90 p-5 text-left shadow-sm">
    <div className="mb-4 flex gap-1 text-orange-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
    <p className="text-sm leading-6 text-slate-500">{text}</p>
    <div className="mt-5 flex items-center gap-3">
      <img className="h-12 w-12 rounded-full object-cover" src={image} alt={name} />
      <div>
        <h2 className="text-lg font-medium text-slate-900">{name}</h2>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <div className="px-4 py-10 text-center sm:px-20 xl:px-32">
      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
        What Our Users Say
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 md:text-base">
        Swift helps teams and solo builders move from rough prompt to polished output without breaking flow.
      </p>
      <div className="mt-16 flex flex-wrap justify-center gap-5">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
