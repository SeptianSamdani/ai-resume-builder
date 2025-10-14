import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users, TrendingUp, Clock } from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Lightning Fast",
      description: "Experience unprecedented speed with our optimized infrastructure and cutting-edge technology."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee to keep your data safe."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team with real-time updates and intuitive sharing tools."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalable Growth",
      description: "Scale effortlessly as your business grows with our flexible infrastructure."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team available around the clock."
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Easy Integration",
      description: "Integrate with your favorite tools in minutes with our comprehensive API documentation."
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.15)] border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Features showcase"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for elegance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-black/5 rounded-full -z-10"></div>
          </motion.div>

          {/* Right Side - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                Features
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
                Everything you need to succeed
              </h2>
              <p className="text-gray-600 text-lg">
                Powerful features designed to help you build, scale, and grow your business with confidence.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-black text-base">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-13">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 group">
                Explore all features
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;