"use client";

import React, { useState } from 'react';
import SlideUpContent from './SlideUpContent';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  { question: 'What is FLEX ACADEMY?', answer: 'Flex Academy is a leading training center focused on empowering individuals with the skills needed to succeed in today’s fast-paced digital world. We offer hands-on courses in modern technologies. Flex Academy is the perfect place to unlock your potential and achieve your goals.' },
  { question: 'What is the difference between long term and short term programs?', answer: 'A short term program is a program of less than 6 month where at the end an attestation is delivered to you while a long term program is a one year program at a end to wriye the DQP exam and an attestation is delivered to you ' },
  { question: 'Can we have a discount?', answer: 'We most of the time do promos and offer discount in some courses CONTACT US TO KNOW MORE' },
  { question: 'Which certificate do you deliver?', answer: 'We offer you a MINEFOP-APPROVED CERTIFICATE.' },
  { question: 'How can we have a DQP', answer: 'As school resumes you come and deposit you files for a long term training (a training of your choice) and start your school' },
  { question: 'What are training sessions?', answer: 'We have 2 training sessions (MORNING AND EVENING) this permits everyone even those working to get trained with us ' },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[80%] h-auto m-auto pt-[20px]">

{/* className="min-h-screen flex items-center justify-center bg-gray-100" */}
      

      <div className='block largeTablet:hidden'>
      <div className="max-w-6xl w-full p-4">
          <h1 className="text-3xl font-semibold mb-4  text-[#373839]">FAQ</h1>
          <p className="text-lg mb-12 text-[#535557]">Got questions? We’ve got answers! Check out the FAQs section to find the most common questions about FLEX ACADEMY.</p>
          <div className="">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#A6DBF4] rounded-lg p-4 cursor-pointer mb-4"
                style={{ backgroundColor: '[#A6DBF4]' }}
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex justify-between items-center ">
                  <span className="font-bold text-lg text-[#202224]">{index + 1}. {faq.question}</span>
                  <span>
                    {activeIndex === index ? (
                      <i className="bi bi-chevron-up" style={{ fontSize: '24px' }} />
                    ) : (
                      <i className="bi bi-chevron-down" style={{ fontSize: '24px' }} />
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-[#535557]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className='hidden largeTablet:block'>
        <SlideUpContent>
          <div className="max-w-6xl w-full p-4">
            <h1 className="text-3xl font-semibold mb-4 mt-[-20px] text-[#373839]">FAQ</h1>
            <p className="text-lg mb-12 text-[#535557]">Got questions? We’ve got answers! Check out the FAQs section to find the most common questions about FLEX ACADEMY.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#A6DBF4] rounded-lg p-4 cursor-pointer"
                  style={{ backgroundColor: '[#A6DBF4]' }}
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-[#202224]">{index + 1}. {faq.question}</span>
                    <span>
                      {activeIndex === index ? (
                        <i className="bi bi-chevron-up" style={{ fontSize: '24px' }} />
                      ) : (
                        <i className="bi bi-chevron-down" style={{ fontSize: '24px' }} />
                      )}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <p className="mt-4 text-[#535557]">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SlideUpContent>
      </div>
    </div>
  );
};

export default FAQSection;



