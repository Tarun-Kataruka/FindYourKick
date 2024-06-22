import React,{useRef} from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Letter from '../Components/Letter/Letter'

const Shop = () => {
  const newCollectionRef = useRef(null);
  return (
    <div>
        <Hero newCollectionRef = {newCollectionRef} />
        <Popular />
        <Offers />
        <div ref = {newCollectionRef}>
        <NewCollections />
        </div>
        <Letter />
    </div>
  )
}

export default Shop