import { useState } from 'react';
import './LogIn.css';

function LogIn() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !confirmPassword)) {
      alert('Please fill in all fields!');
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (isLogin) {
      alert(`Logging in with email: ${email}`);
    } else {
      alert(`Signing up with email: ${email}`);
    }
    // Reset fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="login-page">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />  
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        {!isLogin && (
          <input
          type = "First Name"
          placeholder= "First Name"
          value= {FirstName}
          onChange={(e)=> setFirstName(e.target.value)}

            />
        )}
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Log In'}
        </span>
      </p>
    </div>
  );
}

export default LogIn;