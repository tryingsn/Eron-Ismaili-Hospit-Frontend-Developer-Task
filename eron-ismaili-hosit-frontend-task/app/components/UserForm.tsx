"use client";

import React, { useState, useEffect } from 'react';
import { User } from '../types/User';

interface UserFormProps {
  onUserAdd: (user: User) => void;
  existingUser?: User | null;
}

const UserForm: React.FC<UserFormProps> = ({ onUserAdd, existingUser }) => {
  const [name, setName] = useState<string>(existingUser?.name || '');
  const [email, setEmail] = useState<string>(existingUser?.email || '');
  const [phone, setPhone] = useState<string>(existingUser?.phone || '');
  const [successMessage, setSuccessMessage] = useState<string>('');

  useEffect(() => {
    if (existingUser) {
      setName(existingUser.name);
      setEmail(existingUser.email);
      setPhone(existingUser.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [existingUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: existingUser ? existingUser.id : Date.now(),
      name,
      email,
      phone,
    };
    onUserAdd(newUser);
    setSuccessMessage(existingUser ? 'User updated successfully!' : 'User added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };


  return (
    <div className='mt-4 p-4 border rounded shadow'>
    <h2 className='text-lg font-semibold mb-4'>{existingUser ? 'Edit User' : 'Add User'}</h2>
    {successMessage && <div className='mb-4 text-green-600'>{successMessage}</div>}
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className='border p-2 rounded'
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className='border p-2 rounded'
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
        className='border p-2 rounded'
      />
      <button
        type="submit"
        className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
      >
        {existingUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  </div>
  );
};

export default UserForm;