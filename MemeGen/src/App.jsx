import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [memestate,setMemeState] = useState({
    topText : "One does not simply",
    bottomtext : "Walk into Mordor" ,
    imageUrl : "http://i.imgflip.com/1bij.jpg",
  })


  //these are examples of functions in which the letters are updated live as soon as they are typed in the box, this method does not use the action attribute of forms but rather uses STATE to carry out the job.
  function handlechangetop(e){
     const {value} = e.target;
     setMemeState(prev=>({
      ...prev,
      topText : value
     }))
  }
  function handlechangebottom(e){
    //takes the value at target tag and updates it as bottom/top text.
     const {value} = e.target;
     setMemeState(prev=>({
      ...prev,
      bottomtext : value
     }))
  }

  //changing the meme images randomly after getting many memes from external api and storing it in memes state.
  const [memes,setMemes] = useState([])
  const [clicking,setClicking] = useState(0)
  function increasecount(){
    setClicking(clicking==99 ? 0 : clicking+1)
  }
  useEffect(()=>{
    const randomno = Math.floor(Math.random()*100)
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(y=>setMemeState(prev=>({
      ...prev,imageUrl : y.data.memes[randomno].url
    })))
    .then(console.log(randomno))
  },[clicking])

  return (
    <>
      <div className="form">
              <div className='label'>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handlechangetop}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handlechangebottom}
                    />
                </label>
                <button onClick={increasecount}>Get a new meme image 🖼</button>
              </div>
            </div>
            <div className="meme">
                <img src={memestate.imageUrl}/>
                <span className="top">{memestate.topText}</span>
                <span className="bottom">{memestate.bottomtext}</span>
            </div>

    </>
  )
}

export default App
