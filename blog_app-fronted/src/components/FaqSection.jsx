
import React, { useState } from 'react';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white w-full md:w-[80%] p-3 m-auto  rounded-lg mb-4 transition duration-500 ease-in-out ">
      <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
        <h3 className="text-base font-semibold text-[#824179]">{question}</h3>
        <svg
          className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
          />
        </svg>
      </div>
      {isOpen && <p className="text-gray-700 mt-4">{answer}</p>}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: 'Question 1?', answer: 'Answer to the first question goes here.' },
    { question: 'Question 2?', answer: 'Answer to the second question goes here.' },
    { question: 'Question 3?', answer: 'Answer to the third question goes here.' },
    { question: 'Question 4?', answer: 'Answer to the third question goes here.' },
    { question: 'Question 5?', answer: 'Answer to the third question goes here.' },
  ];

  return (
    <div className="container mx-auto p-8">
      
      {faqItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FaqSection;
