import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';
import auth from '../firebase/Firebase.init';
import Lottie from 'lottie-react';
import loginAnim from '../assets/lottie/login.json';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [forgetEmail, setForgetEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgetPassActive, setIsForgetPassActive] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success('Google login successful!');
        navigate(location?.state || '/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setForgetEmail(email);
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success('Login successful!');
        setIsForgetPassActive(false);
        navigate(location?.state || '/');
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error('Invalid credentials. Please try again.');
        setIsForgetPassActive(true);
      });
  };

  const handleForgetPass = () => {
    if (!isForgetPassActive) {
      toast.error('Forget Pass disabled');
      return;
    }
    // navigate('/forgot', { state: forgetEmail });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-stone-200 dark:bg-gray-700 px-4">
      {/* Login Form */}
      <div className="w-full my-20 md:my-0 max-w-md p-8 bg-white dark:bg-stone-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-cyan-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              required
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              required
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          {error.login && <p className="text-sm text-red-700">{error.login}</p>}
          <p
            onClick={handleForgetPass}
            className={`cursor-pointer text-[#9333EA] hover:underline mb-4 ${!isForgetPassActive ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Forgot Password?
          </p>
          <button type="submit" className="w-full p-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 hover:scale-95 ">Sign In</button>
        </form>

        <div className="my-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 p-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 hover:scale-95 "
          >
            <i className="fa-brands fa-google"></i>
            Sign in with Google
          </button>
        </div>

        <p className="text-sm text-center">
          New here? <Link to="/register" className="text-[#9333EA] hover:underline">Register now</Link>
        </p>
      </div>

      {/* Lottie Animation */}
      <div className="hidden lg:block w-full max-w-md p-6">
        <Lottie animationData={loginAnim} loop={true} />
      </div>
    </div>
  );
};

export default Login;
