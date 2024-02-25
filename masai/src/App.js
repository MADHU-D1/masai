
//import CounterApp from "./components/CounterApp"
import TododApp from "./components/TodoApp"
//import CashWithdraw from "./components/CashWithdraw"
import Posts from "./components/Posts";
import { Slides } from "./components/Slides";
import SetInterval from './components/SetInterval'
import SocialNetwork from "./components/SocialNetworh";

// // function number(num){
// //    if(num %2 === 0){
// //     console.log("even")
// //    }else{
// //      console.log("odd")
// //    }
// // }
// number(29)

// console.log ("1"== "8")

// const Array = (callbak){
//   let arr = newArray()
//   for(let i=0; i < arr.length; i++){
//     arr.push(callbak(this[i],i,this))
//   }
//   return arr
// }
// const arr = [2,4,6,8]
// let output = arr

// // Total number of students in the classroom
// const totalStudents = 100;

// // Number of students who passed
// const passedStudents = 70;

// // Number of students who failed
// const failedStudents = 30;

// // Calculate the percentage of students who passed
// const passPercentage = (passedStudents / totalStudents) * 100;

// // Calculate the percentage of students who failed
// const failPercentage = (failedStudents / totalStudents) * 100;

// console.log(`Percentage of students who passed: ${passPercentage.toFixed(2)}%`);
// console.log(`Percentage of students who failed: ${failPercentage.toFixed(2)}%`);


// // Total number of students in the classroom
// const totalStudents = 100;

// // Calculate the average
// const average = totalStudents / 2; 

// console.log(`Average number of students: ${average}`);


// // Total number of students in the classroom
// const totalStudents = 100;

// // Number of students who passed
// const passedStudents = 70;

// // Number of students who failed
// const failedStudents = 30;

// // Calculate the percentage of students who passed
// const passPercentage = (passedStudents / totalStudents) * 100;

// // Calculate the percentage of students who failed
// const failPercentage = (failedStudents / totalStudents) * 100;
// const totalPercentage = (failedStudents + passedStudents ) / 100;



// console.log(`Percentage of students who passed: ${passPercentage.toFixed(2)}%`);
// console.log(`Percentage of students who failed: ${failPercentage.toFixed(2)}%`);
// console.log(`Percentage of students who failed: ${totalPercentage.toFixed(2)}%`);



function App (){
  // const [count,setcount] = useState(5)
  //  useEffect(()=>{
  //      setInterval(() => {
  //       // console.log(count)
  //       setcount((prevcount)=> prevcount - 1)
        
  //      },1000);
  //  },[])
  return(
    // <div>
    //  <CounterApp/>
     <TododApp/>
    //  <CashWithdraw/>
    //  <Posts/>
      //<SetInterval/>
    // </div>
    // <div>
    //   <h1>Time value:{count}</h1>
    // </div>
    // <div> 
    // <Posts/>
    // <SocialNetwork/>
    
    // </div>
  )
}

export default App

