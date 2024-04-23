import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

import { selectAllDetail } from '../store/slices/pokeDetailSlice'

const PokeCard = () => {
    const pokeDetails = useSelector(selectAllDetail) ||[]
    console.log(pokeDetails)
  return (
    <div>
        <Header title={pokeDetails && pokeDetails[0].name}/>
        <div className='Details'>
            <div className='det'>
            <label>name : </label>
            <span>{pokeDetails && pokeDetails[0].name}</span>
            </div>
           
            <div className='det'>
            <label>height : </label>
            <span>{pokeDetails && pokeDetails[0].height}</span>
            </div>

            <div className='det'>
            <label>weight : </label>
            <span>{pokeDetails && pokeDetails[0].weight}</span>
            </div>

            <div className='det'>
            <label>Types : </label>
            <span className='last-child'>{pokeDetails && pokeDetails[0].types.map((itm)=>{
                  return(<span>{itm.type.name}</span>)
                  })}
                  </span>
            </div>
        </div>

        </div>
  )
}

export default PokeCard