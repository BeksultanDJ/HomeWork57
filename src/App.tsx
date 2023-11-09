import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm';
import Users from './Users';

const App: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'User',
        activity: false,
    });

    const [usersData, setUsersData] = useState<{
        name: string;
        email: string;
        role: string;
        activity: boolean;
    }[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const addUser = () => {
        setUsersData([...usersData, formData]);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-md-6 col-12">
                    <UserForm formData={formData} handleChange={handleChange} addUser={addUser} />
                </div>
                <div className="col-md-6">
                    <Users usersData={usersData} />
                </div>
            </div>
        </div>
    );
}

export default App;
