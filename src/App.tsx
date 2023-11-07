import './App.css';
import { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [userData, setUserData] = useState(null);

    const addUser = () => {
        const newUser = {
            name: name,
            email: email,
            role: role,

        };

        setUserData(newUser);
    };

    return (
        <>
            <div className="UserForm">
                <input
                    placeholder="Имя"
                    name='name'
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    placeholder="Email"
                    name='email'
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <select name="role" onChange={(event) => setRole(event.target.value)}>
                    <option id="role" value="User">Пользователь</option>
                    <option id="role" value="Editor">Редактор</option>
                    <option id="role" value="Admin">Администратор</option>
                </select>
                <button onClick={addUser}>Submit</button>
            </div>

            <div className="UserItem">
                {userData && (
                    <div>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <p>Role: {userData.role}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
