import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import api from '../services/api';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function SignUpPage() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      role_id: '3' // Customer role by default
    }
  });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const selectedRole = watch('role_id');
  const password = watch('password');

  useEffect(() => {
    // Fetch roles from API
    const fetchRoles = async () => {
      try {
        const response = await api.get('/roles');
        setRoles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching roles:', error);
        toast.error('Roller yüklenirken hata oluştu');
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id
      };

      // If role is Store (role_id: 2), add store information
      if (data.role_id === '2') {
        formData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account
        };
      }

      await api.post('/signup', formData);
      
      toast.success('You need to click link in email to activate your account!');
      
      // Redirect to previous page
      setTimeout(() => {
        history.goBack();
      }, 2000);

    } catch (error) {
      console.error('Signup error:', error);
      const errorMessage = error.response?.data?.message || 'Kayıt sırasında bir hata oluştu';
      toast.error(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#23a6f0]" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-[#fafafa] py-[50px] md:py-[100px]">
        <div className="max-w-[600px] mx-auto px-[24px]">
          <div className="bg-white rounded-[5px] p-[30px] md:p-[50px] shadow-sm">
            <h1 className="font-['Montserrat'] text-[32px] md:text-[40px] font-bold leading-[50px] text-[#252b42] text-center mb-[10px]">
              Sign Up
            </h1>
            <p className="font-['Montserrat'] text-[14px] leading-[20px] text-[#727272] text-center mb-[40px]">
              Create your account to get started
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
              {/* Name Field */}
              <div className="flex flex-col gap-[5px]">
                <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                  Name *
                </label>
                <input
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 3,
                      message: 'Name must be at least 3 characters'
                    }
                  })}
                  className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0]"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="font-['Montserrat'] text-[12px] text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

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
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Password must include uppercase, lowercase, number and special character'
                    }
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

              {/* Confirm Password Field */}
              <div className="flex flex-col gap-[5px]">
                <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0]"
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <span className="font-['Montserrat'] text-[12px] text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              {/* Role Selection */}
              <div className="flex flex-col gap-[5px]">
                <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                  Role *
                </label>
                <select
                  {...register('role_id', {
                    required: 'Please select a role'
                  })}
                  className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0] bg-white"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                {errors.role_id && (
                  <span className="font-['Montserrat'] text-[12px] text-red-500">
                    {errors.role_id.message}
                  </span>
                )}
              </div>

              {/* Conditional Store Fields */}
              {selectedRole === '2' && (
                <div className="flex flex-col gap-[20px] p-[20px] bg-[#f9f9f9] rounded-[5px] border border-[#e6e6e6]">
                  <h3 className="font-['Montserrat'] text-[16px] font-bold text-[#252b42]">
                    Store Information
                  </h3>

                  {/* Store Name */}
                  <div className="flex flex-col gap-[5px]">
                    <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                      Store Name *
                    </label>
                    <input
                      type="text"
                      {...register('store_name', {
                        required: selectedRole === '2' ? 'Store name is required' : false,
                        minLength: {
                          value: 3,
                          message: 'Store name must be at least 3 characters'
                        }
                      })}
                      className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0] bg-white"
                      placeholder="Enter store name"
                    />
                    {errors.store_name && (
                      <span className="font-['Montserrat'] text-[12px] text-red-500">
                        {errors.store_name.message}
                      </span>
                    )}
                  </div>

                  {/* Store Phone */}
                  <div className="flex flex-col gap-[5px]">
                    <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                      Store Phone *
                    </label>
                    <input
                      type="tel"
                      {...register('store_phone', {
                        required: selectedRole === '2' ? 'Store phone is required' : false,
                        pattern: {
                          value: /^(\+90|0)?[0-9]{10}$/,
                          message: 'Please enter a valid Turkish phone number'
                        }
                      })}
                      className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0] bg-white"
                      placeholder="05XX XXX XX XX"
                    />
                    {errors.store_phone && (
                      <span className="font-['Montserrat'] text-[12px] text-red-500">
                        {errors.store_phone.message}
                      </span>
                    )}
                  </div>

                  {/* Store Tax ID */}
                  <div className="flex flex-col gap-[5px]">
                    <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                      Store Tax ID *
                    </label>
                    <input
                      type="text"
                      {...register('store_tax_no', {
                        required: selectedRole === '2' ? 'Store tax ID is required' : false,
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message: 'Tax ID must match pattern: TXXXXVXXXXXX'
                        }
                      })}
                      className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0] bg-white"
                      placeholder="TXXXXVXXXXXX"
                    />
                    {errors.store_tax_no && (
                      <span className="font-['Montserrat'] text-[12px] text-red-500">
                        {errors.store_tax_no.message}
                      </span>
                    )}
                  </div>

                  {/* Store Bank Account (IBAN) */}
                  <div className="flex flex-col gap-[5px]">
                    <label className="font-['Montserrat'] text-[14px] font-bold text-[#252b42]">
                      Store Bank Account (IBAN) *
                    </label>
                    <input
                      type="text"
                      {...register('store_bank_account', {
                        required: selectedRole === '2' ? 'Store bank account is required' : false,
                        pattern: {
                          value: /^TR\d{2}[0-9]{5}[0-9]{1}[0-9]{16}$/,
                          message: 'Please enter a valid Turkish IBAN'
                        }
                      })}
                      className="h-[50px] px-[20px] border border-[#e6e6e6] rounded-[5px] font-['Montserrat'] text-[14px] text-[#252b42] outline-none focus:border-[#23a6f0] bg-white"
                      placeholder="TR00 0000 0000 0000 0000 0000 00"
                    />
                    {errors.store_bank_account && (
                      <span className="font-['Montserrat'] text-[12px] text-red-500">
                        {errors.store_bank_account.message}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[58px] bg-[#23a6f0] rounded-[5px] font-['Montserrat'] text-[14px] font-bold text-white hover:bg-[#1a8cd8] transition-colors disabled:bg-[#b8b8b8] disabled:cursor-not-allowed flex items-center justify-center gap-[10px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  'Sign Up'
                )}
              </button>

              {/* Login Link */}
              <p className="font-['Montserrat'] text-[14px] text-center text-[#727272]">
                Already have an account?{' '}
                <a href="/login" className="text-[#23a6f0] font-bold hover:underline">
                  Login
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
