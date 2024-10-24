"use client";

import React from 'react';
import { User } from '../types/User';

interface UserItemProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onEdit, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 border-b">
      <div className="flex-1">
        <span className="font-semibold">{user.name}</span>
        <span className="ml-4 text-gray-600">{user.email}</span>
        <span className="ml-4 text-gray-600">{user.phone}</span>
      </div>
      <div>
        <button 
          onClick={() => onEdit(user)} 
          className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(user.id)} 
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default UserItem;