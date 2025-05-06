import React, { useState } from 'react'
import Logo from './Logo'
import '../App.css';
import { GrSearch } from 'react-icons/gr';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SummaryApi from '../common';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()

  const [menuDisplay, setMenuDisplay] = useState(false);

  console.log("here is profile photo link=======", user)

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_User.url, {
      method: SummaryApi.logout_User.method,
      credentials: 'include'
    })

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
    }

    if (data.error) {
      toast.error(data.message)
    }
  }
  return (
    <header className='h-16 shadow-md'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to='/'>
           <h2 className='text-3xl'> <b>The Chengalapattus </b></h2>
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-10'>
          <div className='text-3xl cursor-pointer'>
            {
              user?.profilePic ? (
                <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} onClick={()=>setMenuDisplay(preve=>!preve)} />
              ) : (
                <FaRegCircleUser />
              )
            }
          </div>

          {
            menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded '>
                <nav>
                  <Link to={"admin-panel"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve=>!preve)}>Admin Panel </Link>
                </nav>
              </div>
            )
          }





          <div className='text-2xl cursor-pointer relative'>
            <span>
              <FaShoppingCart />
            </span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            {
              user?._id ? (
                <button onClick={handleLogout}>Logout</button>
              )
                : (
                  <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red cursor-pointer'> Login</Link>
                )
            }
          </div>


        </div>
      </div>
    </header>
  )
}

export default Header;