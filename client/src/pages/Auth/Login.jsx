import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('login'); // "login" or "signup"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
    if (state === 'login') {
      console.log('Logging in with:', formData.email, formData.password);
      alert(`Welcome back, ${formData.email}!`);
    } else {
      console.log('Registering with:', formData);
      alert(`Account created for ${formData.name}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl flex rounded-3xl shadow-2xl overflow-hidden bg-white">
        
        {/* LEFT SECTION - IMAGE */}
        <div className="hidden lg:flex lg:w-1/2 bg-black p-0 relative overflow-hidden">
          <img 
            src='https://images.unsplash.com/photo-1759327847036-22d9bad214bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600' 
            alt="Login visual"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
          
          {/* Back to Home Button */}
          <div className="absolute top-8 left-8">
            <a 
              href="/" 
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - FORM */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex items-center justify-center bg-white relative">
          {/* Back to Home for mobile */}
          <div className="absolute top-6 left-6 lg:hidden">
            <a 
              href="/" 
              className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium text-sm">Home</span>
            </a>
          </div>
          
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-2 text-gray-900">
              {state === 'login' ? 'Welcome back' : 'Create Account'}
            </h2>
            <p className="text-gray-500 mb-8">
              {state === 'login' ? 'Enter your credentials to continue' : 'Sign up to get started'}
            </p>
            
            <div>
              {state === 'signup' && (
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border mb-4 border-gray-300 outline-none focus:border-gray-900 rounded-lg py-3 px-4 transition-colors text-gray-900"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              )}
              
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border mb-4 border-gray-300 outline-none focus:border-gray-900 rounded-lg py-3 px-4 transition-colors text-gray-900"
                type="email"
                placeholder="Enter your email"
                required
              />
              
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 outline-none focus:border-gray-900 rounded-lg py-3 px-4 transition-colors text-gray-900"
                type="password"
                placeholder="Enter your password"
                required
              />
              
              {state === 'login' && (
                <div className="text-right py-4">
                  <a className="text-gray-900 hover:text-gray-700 underline text-sm font-medium" href="#">
                    Forgot Password?
                  </a>
                </div>
              )}
              
              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-black hover:bg-gray-800 py-3 rounded-lg text-white font-medium transition-colors"
              >
                {state === 'login' ? 'Log in' : 'Sign up'}
              </button>
            </div>
            
            <p className="text-center mt-6 text-gray-600 text-sm">
              {state === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setState(state === 'login' ? 'signup' : 'login')}
                className="text-gray-900 hover:text-gray-700 underline font-medium"
              >
                {state === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <button
              type="button"
              className="w-full flex items-center gap-3 justify-center bg-white hover:bg-gray-50 border border-gray-300 py-3 rounded-lg text-gray-900 transition-colors"
            >
              <img
                className="h-5 w-5"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
                alt="Google logo"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;