import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll ,setPokeList} from '../store/slices/pokeSlice'
import { GET_ALL_POKEMON } from '../api'
import axios from 'axios'
import "../css/pokelist.css"
import Lists from './Lists'

const PokeList = () => {
 
    const pokelist = useSelector(selectAll) || [] 
    const dispatch =useDispatch();
    useEffect (()=>{
        const getAllList =async() =>{
           await axios.get(GET_ALL_POKEMON).then((response)=>{
            dispatch(setPokeList(response.data.results))}
        ).catch((err) =>{
            console.log(err);
           })
        }
        getAllList ()
    },[dispatch])
  return (
    <div className='poke-list'>
        {pokelist.map((item)=>{
             return(<Lists name={item.name} url={item.url} />)
        })}

    </div>
  )
}

export default PokeList