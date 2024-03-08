
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick02 = () =>{
    alert('button click 02');
  }

  const hanldeClick04 = (num) =>{
    alert(num+2);
  }

  return (
    <>
      
      <h2>React Core Concepts Part 02</h2>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <Team></Team> */}


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick02}>Click Me 02</button>
      <button onClick={() =>{alert('click third')}}>Click Me 03</button>

      {/* bejailaiya */}
      <button onClick={() =>{hanldeClick04(5)}}>Click 04</button>
      
      
    </>
  )
}

export default App
