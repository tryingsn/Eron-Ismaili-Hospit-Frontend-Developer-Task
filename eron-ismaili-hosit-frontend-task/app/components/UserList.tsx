"use client";

import React from 'react';
import { User } from '../types/User';
import UserItem from './UserItem';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className='mt-2'>
        <ul>
          {users.map((user) => (
            <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </ul>
    </div>
  );
};

export default UserList;