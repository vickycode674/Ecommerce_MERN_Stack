import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import loginIcons from '../assest/signin.gif';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()
    const {fetchUserDetails} = useContext(Context)


    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault()

        console.log("Here are the details flow happening========",data)


        const dataResponse = await fetch(SummaryApi.SignIn.url, {
            method: SummaryApi.SignIn.method,
            credentials:'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const final_data = await dataResponse.json(); 
        console.log("here is the final data getting from backend dude========",final_data)

        if (final_data.success) {
            toast.success(final_data.message)
            fetchUserDetails() //calling like vue js parent hooks in react js using use context
            navigate("/")
        }

        if (final_data.error) {
            toast.error(final_data.message)
        }


    }

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>

                <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleOnSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='enter password'
                                    name='password'
                                    onChange={handleOnChange}
                                    value={data.password}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button  className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                    </form>

                    <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                </div>


            </div>
        </section>)
}

export default Login