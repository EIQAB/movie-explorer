import React from 'react';

const Login = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px', background: '#111', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="email" placeholder="Email" style={{ padding: '10px' }} />
        <input type="password" placeholder="Password" style={{ padding: '10px' }} />
        <button type="button" style={{ padding: '10px', background: '#e50914', color: 'white', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;