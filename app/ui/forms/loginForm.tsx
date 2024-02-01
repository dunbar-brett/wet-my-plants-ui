'use client'
import { ArrowRightIcon, LockClosedIcon, UserIcon } from '@heroicons/react/20/solid';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from './button';
import { Input } from './input';


interface SignUpFormData {
  email: string;
  password: string;
}


export default function LoginForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // TODO: add form validation logic here before submitting
  };

  return (
    <form className='space-y-3 md:space-y-5 w-96 mx-auto' onSubmit={handleSubmit}>
      <div className='flex-1 rounded-lg bg-transparent backdrop-blur-[30px] 
                      border-[2px] border-white border-opacity-20 shadow-md 
                      text-white p-8'>
        <h1 className='mb-3 text-xl md:text-2xl text-center'>
          Please log in to continue.
        </h1>
        <div className=''>
          <div className='w-full h-[50px] mt-[30px] mb-[10px] relative'>
            <EmailInput name='email' placeholder='Email' handleChange={handleChange} />
          </div>
          <div className='h-[50px] mt-[30px] mb-[10px] relative'>
            <PasswordInput name='password' placeholder='Password' minLength={6} handleChange={handleChange} />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <LoginButton />
        </div>
        <div className='flex h-8 items-end space-x-1'>
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

interface InputProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  placeholder: string;
  minLength?: number;
}

function EmailInput({name, placeholder, handleChange}: InputProps) {
  return (
    <Input
      id={name}
      type={name}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      required
    >
      <UserIcon className='icon-primary' />
    </Input>
  );
}

function PasswordInput({name, placeholder, minLength, handleChange}: InputProps) {
  return (
    <Input
      type={name}
      name={name}
      placeholder={placeholder}
      minLength={minLength}
      onChange={handleChange}
      required
    >
      <LockClosedIcon className='icon-primary' />
    </Input>
  );
}

function LoginButton() {
  return (
    <Button className='flex justify-center items-center mt-4 w-full'>
      <span>Log in</span>
      <ArrowRightIcon className='h-5 w-5 text-gray-50 ml-2' />
    </Button>
  );
}
