import { useState,useEffect } from "react"
function  SetInterval(){
 const  [value, setvalue] = useState(0)
 const [Experience, setExperience] = useState(0)
 const [TrustedPartners, setTrustedPartners] = useState(0)
 const [Products, setProducts] = useState(0)
 useEffect(()=>{
   const intervalId =  setInterval(()=>{
        setvalue((prevvalue)=>{
            if(prevvalue >=1000){
                clearInterval(intervalId)
                return 1000
            }
            return prevvalue +1
        })
    },0.2)
 },[])

 useEffect(()=>{
    const intervalId =  setInterval(()=>{
        setExperience((prevvalue)=>{
            if(prevvalue >=20){
                clearInterval(intervalId)
                return 20
            }
            return prevvalue +1
        })
    },300)
 }, [])

 useEffect(()=>{
    const intervalId =  setInterval(()=>{
        setTrustedPartners((prevvalue)=>{
            if(prevvalue >=100){
                clearInterval(intervalId)
                return 100
            }
            return prevvalue +1
        })
    },60)
 }, [])


 useEffect(()=>{
    const intervalId =  setInterval(()=>{
        setProducts((prevvalue)=>{
            if(prevvalue >=100){
                clearInterval(intervalId)
                return 100
            }
            return prevvalue +1
        })
    },60)
 }, [])


    return(
        <div>
           <h1>Successful Projects:{value} +</h1>
           <h1>Years of Experience:{Experience} +</h1>
           <h1>Years of Experience:{TrustedPartners} +</h1>
           <h1>Years of Experience:{Products} +</h1>
        </div>
    ) 
}

export default SetInterval