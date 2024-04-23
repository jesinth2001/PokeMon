import React, { useState } from 'react'
import "../css/list.css"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { selectAllDetail,setPokeDetails } from '../store/slices/pokeDetailSlice'
import { useNavigate } from 'react-router-dom'


const Lists = ({name,url}) => {
    const dispatch=useDispatch()
    const nav =useNavigate()
  
    const handleClick =async()=>{
        await axios.get(url).then((response)=>{
        const data ={
                name:response.data.name,
                height:response.data.height,
                weight:response.data.weight,
                types:response.data.types
            }
            dispatch(setPokeDetails(data))
            nav("/test")
        }).catch((error)=>{
            console.log(error)
        })
    }
  
   
  return (
    <div className='list' onClick={handleClick}>{name}</div>
  )
}

export default Lists