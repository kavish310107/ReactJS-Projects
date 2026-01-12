import { useState } from 'react'
import './App.css'
import { languages } from './Components/languages'
import { words } from './Components/words'

function App() {
  //2.random guessed word
  function createrandomword(){
    const newrandword = words[Math.ceil(Math.random()*480)]
    return [...newrandword.toUpperCase()]
  }
  
  const [alphabets, setAlphabets] = useState(generateAlphabets)
  const [currWord,setCurrentWord] = useState(createrandomword)

  //5.keeps array of the letters which are guessed so that they cannot be guessed again
  const [guessedLetters, setGuessedLetters] = useState([])
  const word = currWord.map(el=>(
    <div className='letters'>{guessedLetters.includes(el) ? el : ""}</div>
  ))

  //3.element to print keyboard
  function generateAlphabets() {
  return Array.from({ length: 26 }, (_, i) => ({
    value: String.fromCharCode(65 + i),
    id: i,
    visited: false,
    isMatch: null
  }))
}
  //7. guess status
  const wrongguessedletters = guessedLetters.filter(el=>(!currWord.includes(el)))
  const rightguesses =  currWord.every(letter=>guessedLetters.includes(letter))
  
  //4.evrything related to the keyboard
  const keyboardel = alphabets.map(el => {
  let className = "alphabet"

  if (el.visited) {
    className = el.isMatch ? "alphabetright" : "alphabetwrong"
  }

  return (
    <button
      key={el.id}
      className={className}
      onClick={() => chosenletter(el.value)}
      disabled={wrongguessedletters.length>8 || rightguesses}
    >
      {el.value}
    </button>
  )
})

//6.checks if letter is a match to the word to be guessed
  function chosenletter(letter) {
      const isMatch = currWord.includes(letter)
    
      setGuessedLetters(prev =>
        prev.includes(letter) ? prev : [...prev, letter]
      )
    
      setAlphabets(prev =>
        prev.map(el =>
          el.value === letter
            ? { ...el, visited: true, isMatch }
            : el
        )
      )
  }

  //8. reset the game
  function newgame(){
    setAlphabets(generateAlphabets)
    setGuessedLetters([])
    setCurrentWord(createrandomword)
  }


  //1.element to print the languages
  const languageel = languages.map(el=>{
    const islost = el.id <= wrongguessedletters.length
    return  (
      <li className={ islost ? 'lost' : 'listel'} style={{color:el.color,backgroundColor:el.backgroundColor}} key={el.id}>{el.name }</li>
  )})
  
  return (
    <>
       {rightguesses && <div className='result'>
        <h2>You Win !! Well Done</h2>
       </div>}
       {
        wrongguessedletters.length > 8 && <div className='result2'>
        <h2>You Lose , Try Again. 
          Word was {currWord}
        </h2>
       </div>
       }
       {
        wrongguessedletters.length <= 8 && wrongguessedletters.length > 0 &&
        <div className='result3'>
        <h2>{languages[(wrongguessedletters.length)-1].name} was lost forever to the virus</h2>
       </div>
       }

       <div className='languages'>
         <ul>
            {languageel}
         </ul>
       </div>

       <div className='enterword'>
        {word}
       </div>

       <div className='keyboard'>
        {keyboardel}
       </div>

      <button className='NewGame' onClick={newgame}>New Game</button>
    </>
  )
}

export default App
