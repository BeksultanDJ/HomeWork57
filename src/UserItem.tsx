import React from 'react';

interface UserItemProps {
    userData: {
        name: string;
        email: string;
        role: string;
        activity: boolean;
    };
}

const UserItem: React.FC<UserItemProps> = ({ userData }) => {
    return (
        <div className="UserItem">
            {userData && (
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">User Information</h5>
                        <p className="card-text"><strong>Name:</strong> {userData.name}</p>
                        <p className="card-text"><strong>Email:</strong> {userData.email}</p>
                        <p className="card-text"><strong>Activity:</strong> {userData.activity ? 'Да' : 'Нет'}</p>
                        <p className="card-text"><strong>Role:</strong> {userData.role}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserItem;
