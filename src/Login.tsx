import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Zap, ArrowLeft } from 'lucide-react';

type Step = 'login' | 'register' | 'verify' | 'personal';

function Login() {
  const [currentStep, setCurrentStep] = useState<Step>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: 'male',
    birthDate: {
      day: '',
      month: '',
      year: '',
    },
    country: '',
    city: '',
    address: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVerificationInput = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      if (value !== '' && index < 4) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 'login') {
      // Handle login logic
    } else if (currentStep === 'register') {
      setCurrentStep('verify');
    } else if (currentStep === 'verify') {
      setIsVerified(true);
      setCurrentStep('personal');
    } else {
      setShowSuccess(true);
    }
  };

  const renderProgressBar = () => {
    if (currentStep === 'login') return null;
    const steps = ['register', 'verify', 'personal'];
    const currentIndex = steps.indexOf(currentStep);
    return (
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / steps.length) * 100}%` }}
        />
      </div>
    );
  };

  const renderLoginStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome,</h2>
        <p className="mt-2 text-gray-600">Login or sign up</p>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Enter your Email
        </label>
        <div className="mt-1 relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your Email"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={handleInputChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
      >
        Login
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => setCurrentStep('register')}
            className="font-medium text-blue-500 hover:text-blue-600"
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );

  const renderRegisterStep = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Enter your Email
        </label>
        <div className="mt-1 relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your Email"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={handleInputChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="mt-1 relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderVerificationStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold">Verify Your Email</h3>
        <p className="text-sm text-gray-600 mt-2">Please Enter The Code We Sent to your email</p>
      </div>

      <div className="flex justify-center gap-4">
        {verificationCode.map((code, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={code}
            onChange={(e) => handleVerificationInput(index, e.target.value)}
            className="w-12 h-12 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        ))}
      </div>

      <div className="text-center text-sm">
        <span className="text-gray-600">I did not receive the code. </span>
        <button className="text-blue-500 hover:text-blue-600 font-medium">
          Resend the code
        </button>
      </div>
    </div>
  );

  const renderPersonalDetailsStep = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          Enter your First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          value={formData.firstName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Enter your Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          value={formData.lastName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Enter Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          required
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="mt-2 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Choose your country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Choose your city</option>
          <option value="ny">New York</option>
          <option value="la">Los Angeles</option>
          <option value="ch">Chicago</option>
        </select>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
          rows={3}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Logo in top right */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
          <span className="text-2xl font-bold">Sync</span>
          <Zap className="h-6 w-6 text-blue-500 fill-blue-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex gap-8 items-center min-h-[calc(100vh-2rem)]">
        {/* Left Box - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80"
                alt="Smart home interface"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <h1 className="text-5xl font-bold text-white mb-4">
                    <span className="text-blue-400">SYNC</span> your Home,
                  </h1>
                  <h2 className="text-4xl font-bold text-white">
                    Save energy,
                    <br />
                    and live smarter.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Box - Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="max-w-md mx-auto">
              {currentStep !== 'login' && (
                <button
                  onClick={() => setCurrentStep(currentStep === 'verify' ? 'register' : currentStep === 'personal' ? 'verify' : 'login')}
                  className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
              )}

              {renderProgressBar()}

              <div className="my-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 'login' && renderLoginStep()}
                  {currentStep === 'register' && renderRegisterStep()}
                  {currentStep === 'verify' && renderVerificationStep()}
                  {currentStep === 'personal' && renderPersonalDetailsStep()}

                  {currentStep !== 'login' && (
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      {currentStep === 'register' ? 'Next' : currentStep === 'verify' ? 'Verify' : 'Create Account'}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Account Created Successfully
            </h3>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;