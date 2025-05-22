import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify';
import  moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';



const AllUsers = () => {
    const [allUsers,setAllUsers] = useState([])
    const [openUpdateRole,setOpenUpdateRole] = useState(false) //boolean state
    const [updateUserDetails,setUpdateUserDetails] = useState({
        email: "",
        name: "",
        role: "",
        _id:""
    })

    console.log("Heere is the updateUserDetails==============",updateUserDetails)

    const fetchAllUsers = async() =>{
         const fetchData = await fetch(SummaryApi.allUser.url,{
            method: SummaryApi.allUser.method,
            credentials:'include',
         })
         const dataResponse = await fetchData.json();

         console.log("here is the user response from all",dataResponse)

         if(dataResponse.success){
            setAllUsers(dataResponse.data) //This brings data into the state
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
                <tr  className='bg-black text-white'>
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
                                <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' 
                                onClick={()=>{
                                    setUpdateUserDetails(el)
                                    setOpenUpdateRole(true)
                                }
                                }
                                >
                                        <MdModeEdit/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        {
            openUpdateRole && (
                //here updateUserDetails is acting and sending as a props to other compnent dude
                <ChangeUserRole
                 onClose={()=>setOpenUpdateRole(false)}
                 name={updateUserDetails.name}
                 email={updateUserDetails.email}
                 role={updateUserDetails.role}
                 userId={updateUserDetails._id}
                 callFunc={fetchAllUsers}
                 />
            )
        }

    </div>
  )
}

export default AllUsers