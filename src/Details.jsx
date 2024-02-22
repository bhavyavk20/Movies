import axios from 'axios'
import React,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {
    const [data,setData]=useState([''])
     useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=72a91ec7`)
            console.log(response);
            setData(response.data)
        }
        fetchdata()
     })
    const {id}=useParams()
    console.log(id);
  return (
    <div>
        <h1>{data.Title}</h1><br />
        <p>The Actors are:{data.Actors}<br/>
       Awards is:{data.Awards}<br/>
        Year:{data.Year}<br/>
        Released by:{data.Released}<br/>
       Writers:{data.Writer}</p><br/>
       <img src={data.Poster} alt="" height="200px" width="200px"/>
    </div>
  )
}
