"use client"
import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

// interface SignUpFormProps {
//   onSubmit: (formData: SignUpFormData) => void;
// }

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// export default function SignUpForm({ onSubmit }: SignUpFormProps): JSX.Element {
export default function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: add form validation logic here before submitting
    if (formData.password === formData.confirmPassword)
      // sibmit form to api
      console.log(formData);
    else
      return
  };

  return (
    <form className="space-y-3 md:space-y-5 lg:w-[40rem] mx-auto" onSubmit={handleSubmit}>
      <div className="flex-1 rounded-lg bg-gray-100 p-4 md:p-8">
        <h1 className="mb-3 text-xl md:text-2xl">
          Sign Up.
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="flex justify-center items-center">
          <SignUpButton />
        </div>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function SignUpButton() {
  return (
    <Button className="flex justify-center items-center mt-4 w-full lg:w-[30%]">
      <span>Log in</span>
      <ArrowRightIcon className="h-5 w-5 text-gray-50 ml-2" />
    </Button>
  );
}