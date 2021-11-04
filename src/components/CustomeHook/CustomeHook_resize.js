import React,{ useState,useEffect } from 'react'
const UseSize = () => {
    const[size,setsize]=useState(window.innerWidth)

useEffect(() => {
    window.addEventListener('resize',()=>setsize(window.innerWidth))
}, [])
return size    
}

export default UseSize
