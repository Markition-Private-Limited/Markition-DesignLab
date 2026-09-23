import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="px-6 py-24 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="cta-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Ready to build something great?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Let&apos;s talk about your project. No commitment, just a
          conversation.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
