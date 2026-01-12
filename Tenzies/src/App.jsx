import { useState } from 'react'
import './App.css'
import Die from './Components/Die/Die'

function App() {
  //generates the initial array of dictionaries.
  function generateRandomNoArray(){
      const randomarr = []
    for(let i=0;i<10;i++){
        let numb = Math.ceil(Math.random() * 6)
        randomarr.push({value : numb,isHeld : false , key : i});
    }
    return randomarr
  }

  //replaces only those numbers in the dice which are not selected , keeps rest same
  function generaterandomno(elkey){
    let numb = Math.ceil(Math.random() * 6)
    return {value : numb ,isHeld: false, key : elkey}
  }

  //storing the array of dictionaries
  const [arr,setArr] = useState(generateRandomNoArray)
  function Changingarr(){
    if(gamewon){
      setArr(generateRandomNoArray)
    }
    //maps through all numbers of dictionaries in array to check if they are selected,if yes then keeps them locked else changes them using generaterandomno(el.key)
    else{
      setArr(prev=>prev.map(el=>(
      el.isHeld ? el : generaterandomno(el.key)
    )))
    }
    
  }

  //changing isHeld value when clicked , passed this function as a prop to Die.jsx because the info of which die is clicked is present only in Die.jsx
  function changeheld(Id){
      setArr(prev=>prev.map(el=>(
        Id===el.key ? {...el,isHeld:!el.isHeld} : el
      )))
  }

  //renders all dice components on screen and many properties are passed as props here
  const Dieel = arr.map(el=>( 
    <Die key={el.key} value={el.value} Held={el.isHeld} id={el.key} changeheld={changeheld}/>
  ))

  //gamewon logic, .every returns a boolean value for given condition for every element in the list.
  const gamewon = arr.every(die=>die.isHeld) && arr.every(die=>die.value===arr[0].value)

  return (
    <>
      <div className='mainbox'>
        <h1>Tenzies</h1>
        <p className='description'>Roll untill all dice are same.  Click each die to freeze at it's current value between rolls.</p>
        <div className='diebox'>
          {Dieel}
        </div>
        <button className='changenumbers' onClick={Changingarr}><h2>{gamewon ? "NEW GAME" : "ROLL DICE"}</h2></button>
        {gamewon ? <h2 className='congrats'>"!!! CONGRATULATIONS , YOU WIN !!!"</h2> : null}
      </div>
    </>
  )
}

export default App
