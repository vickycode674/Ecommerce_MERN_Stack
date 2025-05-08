import { useState } from 'react'
import React from 'react'
import ROLE from '../common/role'
import {IoMdClose} from "react-icons/io"
import SummaryApi from '../common'
import { toast } from 'react-toastify';
const ChangeUserRole = ({ //these are the props we are getting from parent component
    name,
    email,
    role,
    onClose,
    userId,
    callFunc,
}) => {
    const [userRole,setUserRole] = useState(role)

    const handleOnChangeSelect = (e)=> {
        setUserRole(e.target.value)

    }

    const updateUserRole = async() =>{
        console.log("here is the frontend data with the user",userId,userRole)
      const fetchResponse = await fetch(SummaryApi.updateUser.url,{
        method:SummaryApi.updateUser.method,
        credentials:'include',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userId:userId,
            role:userRole
        })
      })
      console.log("Here is the resposne data=========",fetchResponse)


      const responseData = await fetchResponse.json();

      if(responseData.success){
        toast.success(responseData.message)
        onClose()
        callFunc() //automatically to get updateion of role without refresh dude
      }

      console.log("response Data===========",responseData)

    }

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center '>
            <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

               <button className='block ml-auto' onClick={()=>onClose}>
               <IoMdClose/>
               </button>

                <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>

                <p>Name : {name}</p>
                <p>Email : {email}</p>

                <div className='flex items-center justify-between my-4'>
                <p>Select Role:</p>

                        <select className='flex items-center justify-between my-4 ' value={userRole} onChange={handleOnChangeSelect}>
                            {
                                Object.values(ROLE).map(el => {
                                    return (
                                        <option value={el} key={el}>{el}</option>
                                    )
                                })
                            }
                        </select>
                </div>

                <button className='w-fit mx-auto block  py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700'onClick={updateUserRole}>Change Roles</button>


            </div>
        </div>
    )
}

export default ChangeUserRole