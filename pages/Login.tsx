import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LoginImage from '../assets/image/login.svg';
import Logo from '../assets/image/logo.png'
import userApi from '../lib/api/user'
import { mutate } from "swr";

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/');
    }
  });

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      const {data, status} = await userApi.login(email, password)
      console.log('login data', data)
      console.log('login status', status)
      if (status !== 200) {
        setErrors(data.errors);
      }

      if (data?.data) {
        window.localStorage.setItem("user", JSON.stringify(data.data));
        mutate("user", data?.data);
        router.push("/");
      }

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  }



  return (
    <div className='grid md:grid-cols-2 gap-4 w-full h-screen'>
      <div className=' hidden md:flex justify-center items-center '>
        <Image src={LoginImage} alt='Login Image' width="400" height="400"/>
      </div>
      <div className='bg-primary flex justify-center items-center '>
        <div className="flex flex-col w-full justify-center items-center space-y-6">
          <form onSubmit={onSubmit}>
            <div>
            <h2 className="text-3xl text-gray-700">Login Dashboard</h2>

            </div>
            <div className="w-10/12">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
                </label>
        <input type="email" className="rounded text-pink-500 h-10 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="w-10/12">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
        <input type="password" className="rounded text-pink-500 h-10 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="w-10/12">
                <button type="submit" className="bg-white rounded w-full h-10 hover:bg-gray-100" disabled={loading}>
                  {loading ? 'loading.....' : 'Login'}
                </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
