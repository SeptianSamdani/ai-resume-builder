import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Corp",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "This AI resume builder transformed my job search. I got 3 interview calls within a week of using it. The AI suggestions were spot-on!"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      text: "Best investment I made for my career. The templates are modern and the AI really knows how to highlight achievements effectively."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Global Agency",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "I've tried many resume builders, but this one stands out. The AI optimization helped me land my dream job at a Fortune 500 company."
    },
    {
      name: "David Kim",
      role: "Data Analyst",
      company: "Finance Inc",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "Simple, intuitive, and powerful. The AI suggestions improved my resume quality significantly. Highly recommend to anyone job hunting."
    },
    {
      name: "Jessica Taylor",
      role: "UX Designer",
      company: "Design Studio",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "The templates are beautiful and professional. I love how easy it is to customize everything. Got compliments from recruiters!"
    },
    {
      name: "Robert Martinez",
      role: "Sales Manager",
      company: "Enterprise Co",
      image: "https://i.pravatar.cc/150?img=14",
      rating: 5,
      text: "Worth every penny. The AI helped me articulate my achievements better than I could. Interview rate increased by 300%!"
    }
  ];

    const companiesLogo = [
        { name: "Framer", logo: "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg", },
        { name: "Huawei", logo: "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg", },
        { name: "Instagram", logo: "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg", },
        { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg", },
        { name: "Walmart", logo: "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg", }
    ];

  return (
    <>
        <section className="w-full py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-4">
            Loved by professionals worldwide
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of successful job seekers who transformed their careers with our AI-powered resume builder.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { value: "50K+", label: "Resumes Created" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Success Rate" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gray-300 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <div className="font-semibold text-black text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
            <h3 className="text-base text-center text-slate-400 pb-14 font-medium">
                Trusting by leading brands, including —
            </h3>
            <div class="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                <div class="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

                <div class="flex marquee-inner will-change-transform max-w-5xl mx-auto">
                    {[...companiesLogo, ...companiesLogo].map((company, index) => (
                        <img key={index} className="mx-11" src={company.logo} alt={company.name} />
                    ))}
                </div>

                <div class="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </motion.div>
      </div>
    </section>

    <style>
        {`
                .marquee-inner {
                    animation: marqueeScroll 15s linear infinite;
                }

                .marquee-inner-testimonials {
                    animation: marqueeScroll 35s linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}
    </style>
    </>
  );

};

export default Testimonials;