import { useState } from 'react'
import React from 'react'
import './App.css'
import A from './Components/images/chef.png'
import Clauderecipe from './Components/Recipes/Clauderecipe'

export default function App() {

  const [arr, setArr] = useState([]);
  const [ingredient, setIngredient] = useState("");

  //main section
  function addItem(e) {
    //prevents page reload everytime from is submitted
    e.preventDefault();

    //if no ingredient is added , then return
    if (ingredient === "") return;

    //else add that ingredient to the list of all previous ingredients
    setArr(prev => [...prev, ingredient]);
    setIngredient("");
  }
  function addItemUsingAction(formData){
    //if no ingredient is added , then return
    if (ingredient === "") return;

    //else add that ingredient to the list of all previous ingredients
    setArr(prev => [...prev, ingredient]);
    setIngredient("");
  }

  //second form extra
  function handleSubmit(e) {
      e.preventDefault()
      //prevents page reload

      const fetchEl = e.target;
      //fetch the element which made the  function call

      const inpTags = new FormData(fetchEl)
      //fetch all input tags for the element and note their names for futher use 

      const mail = inpTags.get("email")
      const pass = inpTags.get("password")
      //fetch the value at input tag which has name "email"

      console.log(mail,pass)
      //next we can send the obtained user inputs to backend or to db

      fetchEl.reset();
      //reset the fetched element
    }

  function handleaction(inpTags){
    const mail = inpTags.get("email")
    const pass = inpTags.get("password")
    const feedback = inpTags.get("feedback")
    console.log(mail,pass,feedback)
    //since we are using action attribute therefore the preventDefualt(),reset and fetching data are done by default we only need to access them.

    //OR USE : 
    console.log(Object.fromEntries(inpTags))
    }

  const [ispresent,setIsPresent] = useState(false);
  function updatepresent(){
    if(ingredient==="") return;
    setIsPresent(true);
  }

  const [recipegotten,setRecipeGotten] = useState(false)
  function managebutton2(){
    setRecipeGotten(true)
  }

  return (
    <>
      <form action={addItemUsingAction} className="ADDIN" /*onSubmit={addItem}*/ method='post' onSubmit={updatepresent}>
        <input
          type="text"
          placeholder="e.g. oregano"
          value={ingredient}
          //this line means that whatever user has typed (e) , take it from where it occured (e.target in this case <input>) and the value inside where it occured (e.target.value in this case the ingredient entered) and update it as setIngredient
          //initial value is ingredient which was originaly there, then using the onchange function,,i.e when the user types something take that something and update that as the ingredient,i.e use setIngredient to update it and now  value also becomes that user inputted value, so now when we use the value attribute the use input is taken.
          onChange={(e) => setIngredient(e.target.value)}
        />

        <button type="submit" className='button1'> + Add Ingredient</button>
      </form>
      {ispresent && <h2 className='condrendh2'>Ingredients On Hand : </h2>}
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {ispresent && 
      <div className='getrecipe0'>
        <div className='getrecipe'>
          <div>
            <h3>Ready for a recipe ?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button id='button2' onClick={managebutton2}>Get Your Recipe</button>
        </div>
      </div>}


      {recipegotten ? <Clauderecipe /> : null}
      {/*Unusually we would send the Ingredients to an xternal api and get the recipe from there , however since it is beyond the scope of REACT learning, so i have not done it and it is currently hardcoded. */}

      {/*<form action={handleaction}  if using onSubmit className='login' >
         <h2>Signup Page</h2>

        <label htmlFor='email'>Email : </label>
        <input id='email' type='email' placeholder='Enter Email' name='email' />

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' placeholder='Enter Password' name='password' / >

        <textarea name='feedback' placeholder='Give your feedback'></textarea>

        <button type='submit'>Submit</button>
      </form> */}
    </>
  ); 
}








