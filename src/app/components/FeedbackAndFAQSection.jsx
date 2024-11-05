'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const FeedbackAndFAQSection = () => {
  // Estado para controlar o FAQ ativo
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Função para alternar a pergunta ativa
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-white px-4 py-16 md:px-8 lg:px-16">
      {/* Feedback Section */}
      <div className=" mb-12">
        <h2 className="text-green-700 font-bold text-lg uppercase mb-4">05 • Our Feedbacks</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Ana Carolina',
              feedback: 'Use our built-in analytics dashboard to pull valuable insights and monitor .',
              image: '/Feedback/Ana.png', // Substituir com o caminho da imagem
            },
            {
              name: 'Benjamin Maiato',
              feedback: 'Use our built-in analytics dashboard to pull valuable insights and monitor .',
              image: '/Feedback/Benjamin.png',
            },
            {
              name: 'Crisvan dos Santos',
              feedback: 'Use our built-in analytics dashboard to pull valuable insights and monitor .',
              image: '/Feedback/Crisvan.png',
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-left flex flex-col items-center"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={300}
                height={400}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{person.name}</h3>
              <p className="text-gray-400 text-center">{person.feedback}</p>
              <span className="text-green-700 text-2xl mt-4 ">”</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className=" mb-8" id='FAQ'>
        <h2 className="text-green-700 font-bold text-lg uppercase mb-4">06 • FAQ</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
        <p className="text-gray-400 max-w-xl  mb-8">
          Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.
        </p>
      </div>

      <div className=" p-6 ">
        {[
          {
            question: 'Requirements for working with agricargas',
            answer: 'Use our built-in analytics dashboard to pull valuable insights and monitor valuable insights and monitor.',
          },
          {
            question: 'How do we as subscribers earn for our services?',
            answer: 'Subscribers earn through various partnership benefits and incentives.',
          },
          {
            question: 'How does agriculture protect us from scams?',
            answer: 'Agriculture, supported by technology, ensures transparency and traceability in all operations.',
          },
          {
            question: 'Is it possible to trust you?',
            answer: 'Yes, our processes are certified, and we prioritize safety and transparency.',
          },
        ].map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              className="flex justify-between w-full text-left font-bold text-green-700 text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeFAQ === index ? '–' : '+'}</span>
            </button>
            {activeFAQ === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackAndFAQSection;
