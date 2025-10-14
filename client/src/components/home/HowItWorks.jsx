import { motion } from "framer-motion";
import { Upload, Wand2, Eye, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Upload className="w-6 h-6" />,
      title: "Upload Your Info",
      description: "Import your existing resume or fill in your details through our intuitive form. It takes less than 2 minutes."
    },
    {
      number: "02",
      icon: <Wand2 className="w-6 h-6" />,
      title: "AI Enhancement",
      description: "Our AI analyzes your content and suggests improvements, optimizes keywords, and enhances your achievements."
    },
    {
      number: "03",
      icon: <Eye className="w-6 h-6" />,
      title: "Choose Template",
      description: "Select from dozens of professionally designed templates. Customize colors, fonts, and layout to match your style."
    },
    {
      number: "04",
      icon: <Download className="w-6 h-6" />,
      title: "Download & Apply",
      description: "Export your polished resume in PDF or Word format. Ready to impress recruiters and land your dream job."
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-4">
            Create your perfect resume in minutes
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI-powered platform makes resume building effortless. Just follow these simple steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connection Lines (Desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm relative z-10">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow Connector (Mobile/Tablet) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-300"
                  >
                    <path
                      d="M12 5v14m0 0l-4-4m4 4l4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Join over 50,000+ professionals who have already built their resume with us
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 group">
              Start building now
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-md font-medium transition-all duration-300">
              View examples
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;