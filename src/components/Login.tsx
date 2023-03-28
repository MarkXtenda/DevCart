import React, { useState } from 'react';

type Props = {
  handleLogin: () => void;
};

const Login: React.FC<Props> = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Make API call to check if the username and password are valid
    // If they are valid, call handleLogin
    handleLogin();
    };
    
    return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="email">Email:</label>
    <input
    type="text"
    id="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    required
    />
    </div>
    <div>
    <label htmlFor="username">Username:</label>
    <input
    type="text"
    id="username"
    value={username}
    onChange={(event) => setUsername(event.target.value)}
    required
    />
    </div>
    <div>
    <label htmlFor="password">Password:</label>
    <input
    type="password"
    id="password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    required
    />
    </div>
    <button type="submit">Login</button>
    </form>
    </div>
    );
    };
    
    export default Login;