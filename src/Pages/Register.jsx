import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';
import Lottie from 'lottie-react';
import regAnimation from '../assets/lottie/registration.json';

const Register = () => {
  const [error, setError] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');

    if (!validatePassword(password)) {
      setError({
        ...error,
        password: 'Password must be at least 6 characters long, include 1 uppercase and 1 lowercase letter.'
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success('Registration Successful.');

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/');
          })
          .catch((err) => { });
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="flex justify-center items-center  h-screen bg-stone-200 dark:bg-gray-700 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-white dark:bg-stone-200 shadow-lg rounded-lg p-6 lg:p-10 max-w-6xl w-full mt-16 mb-10 md:mt-0 md:mb-0">
        {/* Left: Form */}
        <div className="w-full  max-w-md ">
          <h2 className="text-2xl font-bold font-mono text-center text-cyan-800 mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">Profile Photo URL</label>
              <input
                id="photoUrl"
                name="photo"
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="Enter your profile photo URL"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              {error.password && <p className="mt-2 text-sm text-red-700">{error.password}</p>}
            </div>
            {error.login && <p className="text-sm text-red-700 mb-4">{error.login}</p>}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full p-3 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 hover:scale-95 transition-transform"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Right: Animation */}
        <div className="hidden lg:block w-full max-w-md">
          <Lottie animationData={regAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;
