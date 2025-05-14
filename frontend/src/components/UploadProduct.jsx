import React from 'react'
import { useState } from 'react'
import { CgClose } from "react-icons/cg"
import productCategory from '../helpers/productCategory'
import { FaCloudUploadAlt } from 'react-icons/fa'
import uploadImage from '../helpers/uploadImage'

const UploadProduct = ({
    onClose
}) => {
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        selling: ""
    })

    const [uploadProductImageInput,setUploadProductImageInput] = useState("");



    const handleOnChange = (e) => {

    }

    const handleUploadProduct = async(e)=>{
        const file = e.target.files[0]
        console.log("Here is the file=======",e);
        setUploadProductImageInput(file.name)

            const uploadImageCloudinary = await uploadImage(file)

    console.log("Here is the flow============",uploadImageCloudinary)
    }


    return (
        <div className='fixed-w-full h-full bg-white-600 top-0 left-0 right-0 bottom-0 flex justify-center'>
            <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-lg'>Upload Product</h2>
                    <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
                        <CgClose />
                    </div>
                </div>

                <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5'>
                    <label htmlFor='productionName' className='mt-3'>Product Name :</label>
                    <input
                        type="text"
                        id='productName'
                        placeholder='enter Product name'
                        value={data.productName}
                        onChange={handleOnChange}
                        className='p-2 bg-slate-100 border rounded'
                    />

                    <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
                    <input
                        type="text"
                        id='brandName'
                        placeholder='enter brand name'
                        value={data.brandName}
                        onChange={handleOnChange}
                        className='p-2 bg-slate-100 border rounded'
                    />

                    <label htmlFor='brandName' className='mt-3'>Category :</label>
                    <select value={data.category} className='p-2 bg-slate-100 border rounded'>
                        {
                            productCategory.map((el, index) => {  //here inside the drop down we get all options to choose
                                return (
                                    <option value={el.value} key={el.value + index}>{el.label}</option>
                                )
                            })
                        }
                    </select>

                    {/* selection for image where we will get all kinds of info  */}

                    <label htmlFor='productImage' className='mt-3'>Product Image :</label>
                    <label htmlFor='uploadImageInput'>

                        <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center'>
                            <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                                <span className='text-3xl'><FaCloudUploadAlt /></span>
                                <p className='text-sm'>Upload Product Image</p>
                                <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct}/>
                            </div>
                        </div>
                    </label>
            <div>
                <img src='' width={80} height={100} className='bg-slate-100' />
            </div>

        </form>
        </div >
    </div >
  )
}

export default UploadProduct