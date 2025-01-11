import React from "react";

const benefits = [
  {
    title: "Easy Customization",
    description:
      "Personalize your blog with customizable themes, layouts, and features tailored to your preferences.",
    icon: "🛠️",
  },
  {
    title: "SEO Friendly",
    description:
      "Boost your blog’s visibility with built-in SEO optimization tools for better search engine ranking.",
    icon: "🚀",
  },
  {
    title: "Engaging Analytics",
    description:
      "Track your blog’s performance with detailed analytics, including views, comments, and engagement metrics.",
    icon: "📊",
  },
  {
    title: "Responsive Design",
    description:
      "Your blog looks stunning on all devices, including desktops, tablets, and mobile phones.",
    icon: "📱",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Benefits of Using Our Blog Application
        </h2>
        <p className="text-lg md:text-xl mb-12">
          Discover features that enhance your blogging experience and make it
          effortless to create and manage your content.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
