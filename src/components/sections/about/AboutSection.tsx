export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Copy side */}
        <div>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            We&apos;re Markition DesignLab
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            A team of designers, strategists, and storytellers who believe every
            brand deserves to be seen clearly. We work closely with founders,
            growth teams, and product studios to craft visuals that last.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {[
              "10+ years of combined design experience",
              "Worked with 50+ brands across 12 industries",
              "Remote-first, async-friendly workflow",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-600 dark:text-indigo-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Placeholder visual */}
        <div className="h-80 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30" />
      </div>
    </section>
  );
}
