import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCartProduct from '../components/HorizontalCartProduct'
import VerticalCartProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCartProduct category={"airpodes"} heading={"top's Airpods"}/>

      <VerticalCartProduct category={"mobiles"} heading={"New Mobiles"}/>
    </div>
  )
}

export default Home