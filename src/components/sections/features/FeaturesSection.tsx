const features = [
  {
    title: "Brand Identity",
    description:
      "Logos, color systems, and typography that make your brand unforgettable.",
    icon: "🎨",
  },
  {
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces that users love and businesses rely on.",
    icon: "🖥️",
  },
  {
    title: "Marketing Design",
    description:
      "Campaigns, social kits, and print collateral that convert attention into action.",
    icon: "📣",
  },
  {
    title: "Motion & Animation",
    description:
      "Micro-interactions and video assets that bring your brand to life.",
    icon: "✨",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-gray-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What We Do
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            End-to-end design services under one roof.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-gray-800"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
