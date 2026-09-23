import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact",
  description: "Get in touch with Markition DesignLab to start your project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Let&apos;s Talk
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Fill in the form below and we&apos;ll get back to you within one
        business day.
      </p>

      {/* Replace with your form component or integrate a form service */}
      <form className="mt-10 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
