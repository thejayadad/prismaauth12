"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import axios from 'axios'; 
import { useRouter } from 'next/navigation';


const Register = () => {

    const router = useRouter();
    const { status } = useSession();
    const [data, setData] = useState({
      name: '',
      email: '',
      password: ''
    });
  
  
    const registerUser = async (e) => {
      e.preventDefault();
  
      console.log('User:', {
        name: data.name,
        email: data.email,
        password: data.password
      });
  
      try {
        const response = await axios.post('/api/register', {
          name: data.name,
          email: data.email,
          password: data.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const user = response.data;
        router.push('/login');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }
  return (
    <section>
      <div>
      <form onSubmit={registerUser}>
        <div className='flex flex-col mb-2'>
        <div className='flex relative'>
        <input
        className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm w-full p-4'
          placeholder='Email'
          name='email'
          id='email'
          type='email'
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        </div>
        </div>
        <div className='flex flex-col mb-2'>
        <div className='flex relative'>
        <input
         className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm w-full p-4'
          placeholder='Password'
          name='password'
          id='password'
          type='password'
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}   
      
        />
           </div>
           </div>
           <div className='flex flex-col mb-2'>
        <div className='flex relative'>
        <input
          placeholder='Name'
          className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm w-full p-4'
          name='name'
          id='name'
          type='text'
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        </div>
        </div>
        <button
        className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
        type='submit'>Register</button>
      </form>  
        <div onClick={() => signIn()}>
          Sign in with Google
        </div>
      </div>
    </section>
  )
}

export default Register