
import { useState } from "react"

export default function Counter(){

    // const [Count,SetCount] =useState(0)
    // const handleAdd =() =>{
    //   const newCount = Count+1;
    //   SetCount(newCount);
    // }
    // return (
    //     <div style={{border:'2px solid tomato'}}>
    //         <h3>Counter: {Count}</h3>
    //         <button onClick={handleAdd}>Add</button>
    //     </div>
    // ) 
    const [count,SetCount] =useState(0);
    const handleAddbutton =() =>{
        const newCount = count+1;
        SetCount(newCount);
    }
    const hanldeReduce =() =>{
        const newReduce =count-1;
        SetCount(newReduce);
    }
    return(
        <div style={{border:'2px solid red'}}>
            <h3>count: {count}</h3>
            <button onClick={handleAddbutton}>Add+</button>
            <button onClick={hanldeReduce}>Reduce</button>
        </div>
    )
}