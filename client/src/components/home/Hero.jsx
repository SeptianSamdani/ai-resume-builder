import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="mb-30 flex flex-col items-center text-sm bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <main className="flex flex-col items-center max-md:px-2">
        {/* Fade-in badge */}
        <motion.a
          href="#pricing"
          className="mt-32 flex items-center gap-2 border border-gray-300 rounded-full p-1 pr-3 text-sm font-medium text-gray-700 bg-white/60 hover:bg-white/80 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1">
            <span>Try 7 days free trial - No credit card required</span>
            <svg
              className="mt-1"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </motion.a>

        {/* Fade-in headline */}
        <motion.h1
          className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Build Your Dream Resume in Minutes with AI
        </motion.h1>

        {/* Fade-in subtext */}
        <motion.p
          className="text-center text-base text-gray-600 max-w-lg mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Create professional, ATS-friendly resumes that get you noticed. Powered by advanced AI to help you land your dream job faster.
        </motion.p>

        {/* Fade-in buttons */}
        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <button 
            onClick={() => window.location.href = '/login'}
            className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white active:scale-95 rounded-md px-7 h-11 transition"
          >
            Start building for free
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-300 active:scale-95 hover:bg-gray-50 transition text-gray-700 rounded-md px-8 h-11"
          >
            View pricing
          </button>
        </motion.div>

        {/* Fade-in image */}
        <motion.img
          src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/0ce829e1e3d85cf37dee85d627290f8429599555"
          className="w-full rounded-[15px] max-w-4xl mt-16 shadow-[0_0_60px_-5px_rgba(0,0,0,0.15)] border border-gray-200"
          alt="Resume builder showcase - Create professional resumes with AI"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
      </main>
    </section>
  );
};

export default Hero;