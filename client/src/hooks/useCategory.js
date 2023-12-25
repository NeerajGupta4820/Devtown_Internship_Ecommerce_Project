import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function useCategory (){
  const [categories,setCategories]=useState([])

  //get categories
  const getCatrgories=async()=>{
    try{
        const {data}=await axios.get("/api/v1/category/get-category")
        setCategories(data?.category)
    }
    catch(error){
        console.log(error)
    }
  }
  useEffect(()=>{
    getCatrgories();
  },[])
  return categories;
}

