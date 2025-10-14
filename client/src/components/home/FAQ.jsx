import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI resume builder work?",
      answer: "Our AI analyzes your input and industry standards to generate optimized content. It suggests improvements for keywords, formatting, and phrasing to make your resume stand out to both recruiters and ATS systems."
    },
    {
      question: "Can I use the resume builder for free?",
      answer: "Yes! Our free plan allows you to create one AI-powered resume with basic templates. You can upgrade to Pro anytime for unlimited resumes, premium templates, and advanced features."
    },
    {
      question: "Are the resumes ATS-friendly?",
      answer: "Absolutely. All our templates are designed to pass Applicant Tracking Systems (ATS). Pro users get an additional ATS compatibility check feature to ensure maximum success rate."
    },
    {
      question: "What file formats can I download?",
      answer: "Free users can download in PDF format. Pro and Enterprise users can download in both PDF and Word (DOCX) formats, giving you flexibility for different application requirements."
    },
    {
      question: "Can I edit my resume after creating it?",
      answer: "Yes, you can edit your resume anytime. All your resumes are saved to your account, and you can make unlimited edits. Pro users also get version history to track changes."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day free trial for all paid plans. If you're not satisfied within the first 30 days of your subscription, contact our support team for a full refund, no questions asked."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use bank-level encryption (256-bit SSL) to protect your data. We never share your information with third parties, and you can delete your account and data anytime."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period, and no future charges will be made."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our AI resume builder
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-black" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-black mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;