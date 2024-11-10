import React from 'react';

const PageLoadingSkelton = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white border border-gray-100 rounded-lg shadow-md">
      {/* Header */}
      <div className="h-8 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
      
      {/* Author Information */}
      <div className="flex items-center mb-4 space-x-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Interaction Icons */}
      <div className="flex space-x-4 mb-6">
        <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Image Placeholder */}
      <div className="h-48 w-full bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
      <div className="h-4 w-1/3 bg-gray-200 rounded mb-4 animate-pulse"></div>

      {/* Text Content */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Paragraphs */}
      <div className="mt-6 space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
      </div>

       {/* Paragraphs */}
       <div className="mt-6 space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default PageLoadingSkelton;
