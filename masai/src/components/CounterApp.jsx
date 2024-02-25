
// import { useState } from "react"
// function CounterApp(){
//     const [counter, updatevalue] = useState(0)
//   return(
//     <div>
//       <p>Counter: {counter}</p>
//       <div>
//          <button disabled={counter >= 10} onClick={()=> updatevalue(counter+1)}>INC</button>
//          <button disabled={counter === 0} onClick={()=> updatevalue(counter - 1)}>DEC</button>
//          <button disabled onClick={()=> updatevalue(0)}>ReSatart</button>
//       </div>
//     </div>
//   )
// }
// export default CounterApp


import  React  from "react"

function CounterApp(){
  const [num, setnum] = React.useState(0)
   React.useEffect(()=>{

   },[num])
  
   

    return(
      <div>
          <h1>{num}</h1>
          <button onClick={()=> setnum(num+1)}>Click</button>
      </div>
    )
}
export default CounterApp