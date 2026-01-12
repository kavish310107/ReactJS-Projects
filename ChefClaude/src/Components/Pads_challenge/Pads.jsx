import './Pads.css'
import Padlist  from './Padlist'
import { useState } from 'react'

export default function Pads(){

    const [newpad,setNewpad] = useState(Padlist);
    function toggleState(id){
        setNewpad(prevpad=>prevpad.map(y=>(
            y.id===id ? {...y, on : !y.on }: y
        )))
    }
    function offall(){
        setNewpad(prevpad=>prevpad.map(y=>(
            {...y,
            on : false}
        )))
    }

    const padel = newpad.map(el => (
        <button key={el.id} className={el.on ? "on" : "off"}
        style={{backgroundColor:el.color}} onClick={()=>toggleState(el.id)}>{el.id}</button>
    ))

    return (
        <>
          <div>{padel}</div>
          <button className='offbutton' onClick={offall}>SHUT ALL</button>
        </>
    )
};