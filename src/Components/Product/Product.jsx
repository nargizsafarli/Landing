import React, { useEffect, useState } from 'react'
import "./Product.css"
import Navbar from '../../Shared/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Product() {
    const [data,setData]=useState([]);
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()
    async function getFetcData() {
         const apiUrl="https://fakestoreapi.com/products"
        try {
           const response= await fetch(apiUrl);
           if(!response.ok){
            throw new Error("Error")
           }
           const result = await response.json();
           const filteredData=result.filter(item=>item.category==="electronics")
           setData(filteredData)
            
        } catch (error) {
           setError(error.message);
        }finally {
            setLoading(false);
          }
    }
    useEffect(()=>{getFetcData()},[])
    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;
  return (
    <div>
        <div className='card'>
        {data.map(el=>(
            <div className='card-item' key={el.id}>
            <img src={el.image} width="110"/>
            <button onClick={()=>navigate(`/detail?id=${el.id}`)}>View</button>
            </div> 
        ))}
       
       
        </div>
    </div>
  )
}

export default Product