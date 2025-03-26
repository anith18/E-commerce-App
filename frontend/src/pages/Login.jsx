// import React, { useState } from 'react';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currentState === 'Sign up' && formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     // Handle form submission (e.g., API call)
//     console.log(formData);
//   };

//   return (
//     <div className="container d-flex flex-column align-items-center justify-content-center vh-80">
//       <h2 className="my-5 prata-regular mb-4">{currentState}</h2>
//       <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
//         <div className="mb-3">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         {currentState === 'Sign up' && (
//           <div className="mb-3">
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>
//         )}
//         <button type="submit" className="btn btn-primary w-100">
//           {currentState}
//         </button>
//       </form>
//       <button
//         onClick={() => setCurrentState(currentState === 'Login' ? 'Sign up' : 'Login')}
//         className="btn btn-link mt-3"
//       >
//         {currentState === 'Login' ? 'Need an account? Sign up' : 'Already have an account? Login'}
//       </button>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState === 'Sign up' && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle form submission (e.g., API call)
    console.log(formData);
  };

  return (
    <div 
      className="container d-flex flex-column align-items-center justify-content-center vh-80"
      style={{ margin: '10px' }} // Added 10px margin on all sides
    >
      <h2 className="my-5 prata-regular mb-4">{currentState}</h2>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {currentState === 'Sign up' && (
          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100">
          {currentState}
        </button>
      </form>
      <button
        onClick={() => setCurrentState(currentState === 'Login' ? 'Sign up' : 'Login')}
        className="btn btn-link mt-3"
      >
        {currentState === 'Login' ? 'Need an account? Sign up' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default Login; 