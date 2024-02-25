import { useEffect, useState } from "react"


const  getData= async(page)=> {
   try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page}`)
    const data = response.json()
    return data 
    
   } catch(error){
    console.log(error)
   }

}

function Posts(){
   const [Loadind, setLoading] = useState(false)
    const [post,setpost] = useState([])
    const [page,setpage] = useState(1)
    // const [text, settext] = useState("")
    // const [filter, setfilter] = useState([])
    // const [count,setcount] = useState(0)
    
    useEffect(()=>{
       fetchandupdatedata(page)
    },[page])

    const fetchandupdatedata=async(page=1)=>{
      try{
        setLoading(true)
         const data = await  getData(page)
         setLoading(false)
         console.log(data)
         setpost(data)
        // console.log("fetch updating data")
      } catch(error){
        setLoading(false)
        console.log(error)
      }

    };

    const handelepagechange=(changeby)=>{
      setpage(page + changeby)
    }
    if(Loadind){
      return <h1>Loading....</h1>

    
     }

    //  const onchangeevent=(e)=>{
    //   settext(e.target.value)
    //   // fetchandupdatedata()
    //  }
    
    //  const oncsearch=()=>{
    //    const filterresults = page.filter(item=>item.title.toLowerCase().includes(text).toLowerCase())
    //    setfilter(filterresults)
    //  }
    return(
        <div>
           <h1>Posts</h1>
           <ul>
              {post.map(eachpost=>(
                <li key={eachpost.id}> {eachpost.id}{"_"} {eachpost.title}</li>
              ))}
              
           </ul>
           <button disabled={page === 1} onClick={()=>handelepagechange(-1)}>Prev</button>
           <button>{page}</button>
           <button disabled={page === 20} onClick={()=>handelepagechange(1)}>Next</button>
        </div>
    ) 
}

export default Posts