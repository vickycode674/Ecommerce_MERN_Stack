import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify';
import  moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';


const AllUsers = () => {
    const [allUsers,setAllUsers] = useState([])

    const fetchAllUsers = async() =>{
         const fetchData = await fetch(SummaryApi.allUser.url,{
            method: SummaryApi.allUser.method,
            credentials:'include',
         })
         const dataResponse = await fetchData.json();

         console.log(dataResponse)

         if(dataResponse.success){
            setAllUsers(dataResponse.data)
         }

         if(dataResponse.error){
            toast.error(dataResponse.message)
         }

    }

    useEffect(()=>{
        fetchAllUsers()
    },[])
  return (
    <div className='bg-white pb-4 '>
        <table className='w-full userTable'>
            <thead>
                <tr>
                <th>Sr.</th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Role</th>
                 <th>Created Date</th>
                 <th>Actions</th>

                </tr>

            </thead>

            <tbody>
                {
                    allUsers.map((el,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('ll')}</td>
                                <td>
                                <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white'>
                                        <MdModeEdit/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <ChangeUserRole/>
    </div>
  )
}

export default AllUsers