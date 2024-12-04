import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className='navbar grid grid-cols-3 justify-between w-11/12 mx-auto'>
      <div>EquiSports</div>
      <div className='hidden lg:flex gap-5 '>
        <Link to='/'>Home</Link>
        <Link to='/addNewProduct'>Add Product</Link>
        <Link to='/updateProduct'>Update Product</Link>
        <Link to='/myProduct'>My Product</Link>
      </div>
      <div className='flex gap-4 justify-end'>
        <div>
          <button className='rounded-full btn'>icon</button>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <button>Logout</button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
