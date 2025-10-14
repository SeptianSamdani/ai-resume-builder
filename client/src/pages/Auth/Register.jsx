import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    console.log('Registering with:', formData);
    alert(`Akun berhasil dibuat untuk ${formData.name}`);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Image */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1732032506091-6fd57cc3113e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
          alt="Register background"
        />
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="flex flex-col">
            {/* Header */}
            <h2 className="text-4xl text-gray-900 font-medium text-center">
              Create Account
            </h2>
            <p className="text-sm text-gray-500/90 mt-3 text-center">
              Join us and start your journey today
            </p>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full mt-8 bg-gray-500/10 hover:bg-gray-500/20 flex items-center justify-center h-12 rounded-full transition-all"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span className="ml-3 text-gray-700 font-medium text-sm">
                Sign up with Google
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full my-6">
              <div className="flex-1 h-px bg-gray-300/90"></div>
              <p className="text-sm text-gray-500/90 whitespace-nowrap">
                or sign up with email
              </p>
              <div className="flex-1 h-px bg-gray-300/90"></div>
            </div>

            {/* Name Input */}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 hover:border-gray-400 focus-within:border-green-600 h-12 rounded-full overflow-hidden pl-6 gap-3 transition-all mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full pr-6"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 hover:border-gray-400 focus-within:border-green-600 h-12 rounded-full overflow-hidden pl-6 gap-3 transition-all mb-4">
              <svg
                width="18"
                height="14"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                  fill="#6B7280"
                />
              </svg>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full pr-6"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 hover:border-gray-400 focus-within:border-green-600 h-12 rounded-full overflow-hidden pl-6 gap-3 transition-all mb-4">
              <svg
                width="14"
                height="18"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                  fill="#6B7280"
                />
              </svg>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full pr-6"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 hover:border-gray-400 focus-within:border-green-600 h-12 rounded-full overflow-hidden pl-6 gap-3 transition-all">
              <svg
                width="14"
                height="18"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                  fill="#6B7280"
                />
              </svg>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full pr-6"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2 mt-6">
              <input
                className="mt-1 w-4 h-4 accent-green-600"
                type="checkbox"
                id="terms"
                required
              />
              <label className="text-sm text-gray-500/90" htmlFor="terms">
                I agree to the{' '}
                <a href="#" className="text-green-600 hover:underline">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-green-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 w-full h-12 rounded-full text-white font-medium bg-green-600 hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
            >
              Create Account
            </button>

            {/* Switch to Login */}
            <p className="text-gray-500/90 text-sm mt-6 text-center">
              Already have an account?{' '}
              <a
                href="#"
                className="text-green-600 font-medium hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;