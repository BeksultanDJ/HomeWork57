import React from 'react';
import UserItem from './UserItem';

interface UsersProps {
    usersData: {
        name: string;
        email: string;
        role: string;
        activity: boolean;
    }[];
}

const Users: React.FC<UsersProps> = ({ usersData }) => {
    return (
        <div>
            {usersData.map((userData, index) => (
                <UserItem key={index} userData={userData} />
            ))}
        </div>
    );
}

export default Users;
