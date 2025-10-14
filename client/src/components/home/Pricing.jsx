import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for trying out our AI resume builder",
      features: [
        "1 AI-powered resume",
        "3 basic templates",
        "PDF download",
        "Basic AI suggestions",
        "Email support"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "19",
      period: "month",
      description: "Best for active job seekers",
      features: [
        "Unlimited AI-powered resumes",
        "50+ premium templates",
        "PDF & Word download",
        "Advanced AI optimization",
        "Cover letter generator",
        "LinkedIn profile optimizer",
        "Priority support",
        "ATS compatibility check"
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "49",
      period: "month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-gray-50 to-white">
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
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that works best for you. All plans include a 7-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-black text-white shadow-2xl scale-105 border-2 border-black"
                  : "bg-white text-black shadow-sm border border-gray-200 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-black"}`}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-md font-medium transition-all duration-300 mb-8 ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                <div className={`text-sm font-semibold mb-4 ${plan.highlighted ? "text-gray-300" : "text-gray-900"}`}>
                  What's included:
                </div>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-black"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-gray-200" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 text-gray-600 text-sm"
        >
          <p>✓ 7-day free trial • No credit card required • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;