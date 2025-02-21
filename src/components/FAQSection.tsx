import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="relative group">
      {/* Neon border effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur opacity-50 
          transition-all duration-500 group-hover:opacity-75 ${isOpen ? 'opacity-100' : ''}`}
      ></div>
      
      <div className="relative bg-gray-900 rounded-xl">
        <button
          onClick={onClick}
          className="w-full px-6 py-4 text-left flex items-center justify-between"
        >
          <span className="font-medium text-lg">{question}</span>
          <ChevronDown 
            className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-4 text-gray-400">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What makes your audio processing unique?",
      answer: "Our revolutionary soundwave technology uses advanced AI algorithms to analyze and enhance audio in real-time, providing unmatched clarity and depth that traditional processors can't achieve."
    },
    {
      question: "How can I integrate this with my current setup?",
      answer: "Our system seamlessly integrates with all major DAWs and audio interfaces through our plugin system. Simply install, connect, and you're ready to transform your sound."
    },
    {
      question: "Do you offer support for custom requirements?",
      answer: "Yes! Our team of audio experts is available 24/7 to help you achieve your specific sound goals. We provide personalized consultation and custom solution development."
    },
    {
      question: "What about data security and backup?",
      answer: "Your audio data is encrypted end-to-end and stored in secure cloud servers with automatic backups. We ensure your creative work is always protected and accessible."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[128px] -top-48 -right-24 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[128px] -bottom-32 -left-24 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Common{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our audio processing technology
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-12 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative px-6 py-8 bg-gray-900/50 backdrop-blur-sm rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-cyan-500/20">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Still have questions?</h3>
                <p className="text-gray-400">Our support team is here to help</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-[1.02]">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;