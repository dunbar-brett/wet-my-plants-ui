'use client'
import { ArrowRightIcon, LockClosedIcon, UserIcon } from '@heroicons/react/20/solid';
import React, { useState, FormEvent, ChangeEvent, FocusEvent} from 'react';
import { Button } from '../formItems/button';
import { Input } from '../formItems/input';
import { validateEmail, } from '../../utils/validators';


interface SignUpFormData {
  email: string;
  password: string;
}

interface ErrorData {
  email: string;
  password: string;
  login: string;
}


export default function LoginForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    password: '',
  });

  const [errorData, setErrorData] = useState<ErrorData>({
    email: '',
    password: '',
    login: '',
  });
  

  // const [loginError, setLoginError] = useState('');
  // const [loginSuccess, setLoginSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateData = (name: string, value: string) => {
    if (name === 'email') {
      if (!value) {
        setErrorData((prevData) => ({ ...prevData, email: 'Email is required' }));
      } else if (!validateEmail(value)) {
        setErrorData((prevData) => ({ ...prevData, email: 'Invalid email' }));
      } else {
        setErrorData((prevData) => ({ ...prevData, email: '' }));
      }
    }
    if (name === 'password') {
      if (!value) {
        setErrorData((prevData) => ({ ...prevData, password: 'Password is required' }));
      } else if(value.length < 6) {
        setErrorData((prevData) => ({ ...prevData, password: 'Password should be at least 6 characters' }));
      } else {
        setErrorData((prevData) => ({ ...prevData, password: '' }));
      }
    }
  }

  function hasError(): boolean {
    return !errorData.email || !errorData.password || !errorData.login;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (showError) {
      // setErrorData((prevData) => ({ ...prevData, email: '', password: '' }));
      validateData(name, value);
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateData(name, value);
    setShowError(hasError());
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    validateData('email', formData.email);
    validateData('password', formData.password);
    if(hasError()) {
      console.log('Form has errors');
      return;
    }

    setLoading(true);
    // handle fetch to api
    // set timeout to simulate api call
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  };


  return (
    <form className='space-y-3 md:space-y-5 w-96 mx-auto' onSubmit={handleSubmit}>
      <div className='flex-1 rounded-lg bg-transparent backdrop-blur-2xl 
                      border-2 border-white border-opacity-20 shadow-md 
                      text-white p-8'>
        <h1 className='text-2xl text-center'>
          Please log in to continue.
        </h1>

        {['email', 'password'].map((name) => (
          <div key={name} className='w-full h-12 mt-16 mb-3 relative'>
            <InputBox name={name} placeholder={name} handleChange={handleChange} handleBlur={handleBlur} />
          </div>
        ))}

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
  handleBlur?: React.FocusEventHandler<HTMLInputElement>;
  name: string;
  placeholder: string;
  minLength?: number;
}

function InputBox({name, placeholder, handleChange, handleBlur}: InputProps) {
  return (
    <Input
      id={name}
      type={name}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      <UserIcon className='icon-primary' />
    </Input>
  );
}

function LoginButton() {
  return (
    <Button>
      <span>Log in</span>
      <ArrowRightIcon className='h-5 w-5 text-gray-50 ml-2' />
    </Button>
  );
}
