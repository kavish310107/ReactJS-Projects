import { useState } from 'react';
import './Die.css'

export default function Die(props){
    return(
        <>  
        <button className="button1" style={props.Held ? {backgroundColor:'#59E391'} : {backgroundColor:'white'}} onClick={()=>props.changeheld(props.id)}><h1 id='h1'>{props.value}</h1></button>
        </>
    )
}

