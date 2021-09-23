import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LoginImage from '../assets/image/login.svg';
import Logo from '../assets/image/logo.png'

const LoginPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/');
    }
  });
  return (
    <div className='grid md:grid-cols-2 gap-4 w-full h-screen'>
      <div className=' hidden md:flex justify-center items-center '>
        <Image src={LoginImage} alt='Login Image' width="400" height="400"/>
      </div>
      <div className='bg-primary flex justify-center items-center '>
        <div className="flex flex-col w-full justify-center items-center space-y-6">
            <div>
            <h2 className="text-3xl text-gray-700">Login Dashboard</h2>

            </div>
            <div className="w-10/12">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Email
                </label>
        <input type="email" className="rounded text-pink-500 h-10 w-full" />
            </div>

            <div className="w-10/12">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Password
                </label>
        <input type="password" className="rounded text-pink-500 h-10 w-full" />
            </div>
            <div className="w-10/12">
                <button className="bg-white rounded w-full h-10 hover:bg-gray-100">
                    Login
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
