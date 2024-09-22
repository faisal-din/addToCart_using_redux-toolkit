import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../stores/cartSlice';

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div>
      <header className='flex justify-between items-center mb-5'>
        <Link to='/' className=' text-xl font-semibold text-zinc-900 '>
          Home.
        </Link>
        <div>
          <div
            onClick={handleOpenTabCart}
            className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer'
          >
            <img src={iconCart} alt='iconCart' className='w-6 h-6' />
            <span className=' absolute top-2/3 right-1/2 bg-red-500 text-white text-lg w-5 h-5 rounded-full flex justify-center items-center'>
              {totalQuantity}
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
