import { useState } from "react"

function CashWithdraw(){
    const [amount, setAmount] = useState(0)

    const cashdeposite=()=>{
        setAmount(amount+100)
        setAmount(amount+100)
        setAmount(amount+100)
        setAmount(amount+100)
    }

    const cashwithdrawal=()=>{
        setAmount(amount-100)
    }
    return(
       
        <div>
           <h1>Amounnt: {amount}</h1>
           <div>
             <button  onClick={cashdeposite}>Deposiet $100</button>
             <div>
             <button onClick={cashwithdrawal}>WithDrawal $100</button>
           </div>
           </div>
        </div>
    )
}

export default CashWithdraw