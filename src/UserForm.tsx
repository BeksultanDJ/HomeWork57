import React from 'react';

interface UserFormProps {
    formData: {
        name: string;
        email: string;
        role: string;
        activity: boolean;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    addUser: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ formData, handleChange, addUser }) => {
    return (
        <div className="UserForm">
            <div className="mb-2">
                <label htmlFor="name" className="form-label">Имя</label>
                <input
                    id="name"
                    className="form-control"
                    placeholder="Имя"
                    name='name'
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    name='email'
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-2">
                <label htmlFor="role" className="form-label">Роль</label>
                <select
                    id="role"
                    className="form-select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="User">Пользователь</option>
                    <option value="Editor">Редактор</option>
                    <option value="Admin">Администратор</option>
                </select>
            </div>

            <div className="mb-2 form-check">
                <input
                    id="checkbox"
                    type="checkbox"
                    className="form-check-input"
                    name='activity'
                    checked={formData.activity}
                    onChange={handleChange}
                />
                <label htmlFor="checkbox" className="form-check-label">Активен</label>
            </div>

            <button
                className="btn btn-primary"
                onClick={addUser}
            >
                Submit
            </button>
        </div>

    );
}

export default UserForm;
