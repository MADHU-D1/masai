import { useState } from "react"
function Todolist({onclickbtn}){
    const [text, setText] = useState("")
    const onchangetextvalue=(e)=>{
        setText(e.target.value)
    }
    const onclick=()=>{
        onclickbtn(text)
        setText("")
    } 
    return(
        <div>
           <h1>TODO APPLICTION APP</h1>
           <div>
             <input type="text"  value={text} onChange={onchangetextvalue}/>
             <div>
                <button onClick={onclick}>ADD TEXT</button>
             </div>
           </div>
        </div>
    )
}

export default Todolist