import React from 'react'
import CategoryList from '../components/categoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardComponenet'

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      
      <HorizontalCardProduct category={"airpodes"} heading={"Top air Podes"} />
      <HorizontalCardProduct category={"watches"} heading={"Top Branded Watches"} />

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"} />
      <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"} />
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"} />
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"} />
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />


    </div>
  )
}

export default Home