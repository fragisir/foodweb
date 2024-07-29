// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodsDisplay/FoodDisplay'
import AppDowenload from '../../components/AppDownload/AppDowenload'

const Home = () => {

  const [category,setCategory]= useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDowenload/>
    </div>
  )
}

export default Home