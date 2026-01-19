import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import { loginUser } from '../store/actions/clientActions';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(
        { email: data.email, password: data.password },
        data.rememberMe
      ));
      
      toast.success('Login successful!');
      
      // Redirect to previous page or home
      const from = location.state?.from?.pathname || '/';
      setTimeout(() => {
        history.push(from);
      }, 1000);

    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-[#fafafa] py-[50px] md:py-[100px]">
        <div className="max-w-[500px] mx-auto px-[24px]">
          <div className="bg-white rounded-[5px] p-[30px] md:p-[50px] shadow-sm">
            <h1 className="font-['Montserrat'] text-[32px] md:text-[40px] font-bold leading-[50px] text-[#252b42] text-center mb-[10px]">
              Login
            </h1>
            <p className="font-['Montserrat'] text-[14px] leading-[20px] text-[#727272] text-center mb-[40px]">
              Welcome back! Please login to your account
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
              {/* Email Field */}
              <div className="flex flex-col gap-[5px]">
                <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                  Email *
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0]"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="font-['Montserrat'] text-[12px] text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-[5px]">
                <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                  Password *
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required'
                  })}
                  className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0]"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <span className="font-['Montserrat'] text-[12px] text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  id="rememberMe"
                  {...register('rememberMe')}
                  className="w-[18px] h-[18px] cursor-pointer accent-[#23a6f0]"
                />
                <label 
                  htmlFor="rememberMe" 
                  className="font-['Montserrat'] text-[14px] text-[#252b42] cursor-pointer select-none"
                >
                  Remember me
                </label>
              </div>

              {/* Test Credentials Info */}
              <div className="bg-[#f0f9ff] border border-[#23a6f0] rounded-[5px] p-[15px]">
                <p className="font-['Montserrat'] text-[12px] font-bold text-[#252b42] mb-[5px]">
                  Test Credentials (Password: 123456):
                </p>
                <ul className="font-['Montserrat'] text-[12px] text-[#727272] list-disc list-inside">
                  <li>customer@commerce.com</li>
                  <li>store@commerce.com</li>
                  <li>admin@commerce.com</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[58px] bg-[#23a6f0] rounded-[5px] font-['Montserrat'] text-[14px] font-bold text-white hover:bg-[#1a8cd8] transition-colors disabled:bg-[#b8b8b8] disabled:cursor-not-allowed flex items-center justify-center gap-[10px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Logging in...</span>
                  </>
                ) : (
                  'Login'
                )}
              </button>

              {/* Sign Up Link */}
              <p className="font-['Montserrat'] text-[14px] text-center text-[#727272]">
                Don't have an account?{' '}
                <a href="/signup" className="text-[#23a6f0] font-bold hover:underline">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
