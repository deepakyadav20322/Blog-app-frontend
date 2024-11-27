import React from 'react';

const Advertisement = () => {
  // Array of advertisement content
  const ads = [
    {
      title: "Good Blogs Outside of Dev.to",
      badge: "New",
      comments: 0,
    },
    {
      title: "What should I write blog posts about?",
      comments: 4,
    },
    {
      title: "Is it worth creating a native mobile app for blogs?",
      comments: 2,
    }
  ];

  return (
    <div className="hidden lg:flex flex-col items-start">
      {/* Discussion Section */}
      <div className="hidden lg:block w-80 mt-16 sticky top-10">
        <div className="flex flex-col p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm max-h-[25rem]">
          {/* Section Header */}
          <h2 className="text-lg font-semibold mb-4">#discuss</h2>

          {/* Ad Content */}
          {ads.map((ad, index) => (
            <div key={index} className="mb-8">
              {/* Ad Title */}
              <h3 className="text-md font-medium text-gray-600 mb-1">{ad.title}</h3>

              {/* Optional Badge */}
              {ad.badge && (
                <span className="inline-block bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded mb-1">
                  {ad.badge}
                </span>
              )}

              {/* Comments */}
              <p className="text-sm text-gray-500">{ad.comments} comments</p>
            </div>
          ))}

          {/* Bottom Border */}
          <hr className="mt-2 border-gray-300" />
        </div>
      </div>

      {/* Sponsored Section */}
      <div className="p-4 mt-4 sticky top-[27rem] bg-gray-50 border border-gray-200 rounded-md shadow-sm w-80">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Sponsored</h3>

        {/* Content */}
        <p className="text-xs text-gray-600">
          Upgrade your skills with our new courses! Limited-time discount available.
        </p>

        {/* CTA Button */}
        <a
          href="https://example.com" // Replace with actual link
          className="mt-3 inline-block text-xs text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Advertisement;
