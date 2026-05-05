import React from 'react';

const Register = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', background: '#813333', padding: '30px', borderRadius: '10px' }}>
      <h2 style={{ marginBottom: '20px' }}>Create Account</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Full Name" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #333', background: '#222', color: 'white' }} />
        <input type="email" placeholder="Email" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #333', background: '#222', color: 'white' }} />
        <input type="password" placeholder="Password" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #333', background: '#222', color: 'white' }} />
        <button type="button" style={{ background: '#e50914', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;