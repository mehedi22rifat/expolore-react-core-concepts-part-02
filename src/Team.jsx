import { useState } from "react"


export default function Team(){
   const [team,setTeam] = useState(11);
  
   const handleTeam = () =>{
      const newTeam = team+1;
      setTeam(newTeam);
   }
   const handleRemove = () =>{
    //   shortcut
      setTeam(team -1);
   }



    const temaStyle = {
         border:'2px solid tomato',
         padding:'10px',
         margin:'10px',
         borderRadius:'15px',
    }
    return(
        <div style={temaStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleTeam}>Add+</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}



