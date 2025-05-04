import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import {imagetoBase64} from '../helpers/imagetoBase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
      email : "",
      password : "",
      name : "",
      confirmPassword : "",
      profilePic : "",
  })


  const navigate = useNavigate()

  const handleOnChange = (e) =>{
      const { name , value } = e.target

      setData((preve)=>{
          return{
              ...preve,
              [name] : value  //so here name and value means left shown and value is orginal for eg email is [name]  and vivek is value dude
          }
      })
  }

  const handleUploadPic = async(e) =>{
    const file = e.target.files[0]
    
    const imagePic = await imagetoBase64(file)
    
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })

  }


  const handleSubmit = async(e) =>{
      e.preventDefault()

      if(data.password === data.confirmPassword){
        const dataResponse = await fetch(SummaryApi.SignUp.url,{
            method : SummaryApi.SignUp.method,
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(data)
          })
    
           const final_data = await dataResponse.json();

           if(final_data.success){
            toast.success(final_data.message)
            navigate("/login")
           }

           if(final_data.error){
            toast.error(final_data.message)
           }
    
           console.log("data===",final_data);
      }

      else{
        console.log("Please check details and try again somewhere mistake is happening")
      }

    //   try {
    //     const response = await fetch("http://localhost:8080/api/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });
    
    //     const result = await response.json();
    
    //     if (response.ok) {
    //       alert("Signup successful!");
    //       navigate("/login"); // or wherever you want
    //     } else {
    //       alert(result.message || "Signup failed");
    //     }
    //   } catch (error) {
    //     console.error("Error during signup:", error);
    //     alert("Something went wrong");
    //   }
  }

  return (
    <section id='signup'>
        <div className='mx-auto container p-4'>

            <div className='bg-white p-5 w-full max-w-sm mx-auto'>

                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons'/>
                        </div>
                        <form>
                          <label>
                            <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                              Upload  Photo
                            </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                          </label>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                      <div className='grid'>
                              <label>Name : </label>
                              <div className='bg-slate-100 p-2'>
                                  <input 
                                      type='text' 
                                      placeholder='enter your name' 
                                      name='name'
                                      value={data.name}
                                      onChange={handleOnChange}
                                      required
                                      className='w-full h-full outline-none bg-transparent'/>
                              </div>
                          </div>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='enter password'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    placeholder='enter confirm password'
                                    value={data.confirmPassword}
                                    name='confirmPassword' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>

                                <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

                    </form>

                    <p className='my-5'>Already have account ? <Link to={"/login"} className=' text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
            </div>


        </div>
    </section>
  )
}

export default SignUp