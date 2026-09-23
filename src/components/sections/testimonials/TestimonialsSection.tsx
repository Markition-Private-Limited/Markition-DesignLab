const testimonials = [
  {
    quote:
      "Markition DesignLab gave our startup a visual identity we're genuinely proud of. Turnaround was fast and quality was exceptional.",
    author: "Aisha R.",
    role: "Co-founder, NovaTech",
  },
  {
    quote:
      "They understood our brand voice immediately. The campaign assets they produced tripled our social engagement in two weeks.",
    author: "Carlos M.",
    role: "Head of Marketing, Flourish Co.",
  },
  {
    quote:
      "Professional, creative, and collaborative. They feel less like a vendor and more like an in-house design team.",
    author: "Priya K.",
    role: "Product Lead, Orbit SaaS",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-gray-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="testimonials-heading"
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          What Clients Say
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800"
            >
              <blockquote>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{t.author}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
