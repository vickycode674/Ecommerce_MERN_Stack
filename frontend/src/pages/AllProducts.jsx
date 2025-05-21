import React from 'react'
import UploadProduct from '../components/UploadProduct'
import { useState } from 'react'
import SummaryApi from '../common'
import { useEffect } from 'react'
import AdminProductCard from "../components/AdminProductCard";

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([]) //step 5 using useState for each value

  const fetchAllProduct = async()=>{     //step 6 recieving the values here
   const resposne = await fetch(SummaryApi.allProduct.url);

   const dataResponse = await resposne.json()

   console.log("Here is the data resposne dude==============",dataResponse)

   setAllProduct(dataResponse?.data || [])
   }

   useEffect(()=>{
     fetchAllProduct(); //step7 each and every time whenever page is reloaded we need to get the data
   },[]);

  return (
    <div>
        <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white tra py-1 px-3 rounded-full'
        onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
      </div>


 {/* all product  */}
        <div className='flex items-center flex-wrap bg-slate-200  gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
      { 
          allProduct.map((product,index)=>{
            return(
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
              )
          }) 
       }
      </div>

      
     {
        openUploadProduct && (
          <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>
        )
      }

    </div>
  )
}

export default AllProducts