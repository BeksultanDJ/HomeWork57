import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'User',
        activity: false,
    });

    const [userData, setUserData] = useState(null);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        // Если тип элемента - чекбокс, используем checked вместо value
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const addUser = () => {
        setUserData(formData);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 offset-md-3 col-10">
                    <div className="UserForm">
                        <input
                            className="form-control mb-2"
                            placeholder="Имя"
                            name='name'
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            placeholder="Email"
                            name='email'
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            id="checkbox"
                            type="checkbox"
                            name='activity'
                            checked={formData.activity}
                            onChange={handleChange}
                        />
                        <label htmlFor="checkbox">Активен</label>
                        <select
                            className="form-select mb-2"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="User">Пользователь</option>
                            <option value="Editor">Редактор</option>
                            <option value="Admin">Администратор</option>
                        </select>
                        <button
                            className="btn btn-primary"
                            onClick={addUser}
                        >
                            Submit
                        </button>
                    </div>

                    <div className="UserItem mt-4">
                        {userData && (
                            <div>
                                <p><strong>Name:</strong> {userData.name}</p>
                                <p><strong>Email:</strong> {userData.email}</p>
                                <p><strong>Activity:</strong> {userData.activity ? 'Да' : 'Нет'}</p>
                                <p><strong>Role:</strong> {userData.role}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
