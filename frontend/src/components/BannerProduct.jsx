import React from 'react'
import image1 from '../assest/banner/img1.webp'
import image2 from '../assest/banner/img2.webp'
import image3 from '../assest/banner/img3.jpg'
import image4 from '../assest/banner/img4.jpg'
import image5 from '../assest/banner/img5.webp'

import image1mob from '../assest/banner/img1_mobile.jpg'
import image2mob from '../assest/banner/img2_mobile.webp'
import image3mob from '../assest/banner/img3_mobile.jpg'
import image4mob from '../assest/banner/img4_mobile.jpg'
import image5mob from '../assest/banner/img5_mobile.png'
import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useEffect } from 'react'


const BannerProduct = () => {

    const [currentImage, setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]

    const mobileImages = [
        image1mob,
        image2mob,
        image3mob,
        image4mob,
        image5mob
    ]

    const nextImage = () => {
        if (desktopImages.length - 1 > currentImage) {
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () => {
        if (currentImage != 0) {
            setCurrentImage(preve => preve - 1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (desktopImages.length-1>currentImage){
                nextImage()
            }
            else{
                setCurrentImage(0)
            }
        },5000)
        return()=> clearInterval(interval)
    },[currentImage])
    
    return (
        <div className='container mx-auto px-4 rounded'>
            <div className='h-64 md:h-78 w-full bg-slate-200 relative '>

                <div className='absolute z-10 h-full w-full flex items-center hidden'>
                    <div className='flex justify-between w-full px-9 text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1 cursor-pointer'> <FaAngleLeft /></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1 cursor-pointer'><FaAngleRight /></button>
                    </div>
                </div>

                {/**desktop and tablet version */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                    {
                        desktopImages.map((imageURl, index) => {
                            return (
                                <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                    <img src={imageURl} className='w-full h-full' />
                                </div>
                            )
                        })
                    }
                </div>

                {/* tablet and mobile versions */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                     {
                        mobileImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover'/>
                            </div>
                            )
                        })
                }
                </div>
            </div>
        </div>

    )
}

export default BannerProduct