import { useState } from 'react';
import './Body.css';

function Body(props) {
  const [isshown,setIsshown] = useState(false);
  function shown(){
    setIsshown(!isshown)
  }

  return (
    //jsx files should always contain a single main tag,if needed that tag can contain multiple tags,but main tag should be only 1
    //can use jsx fragment,i.e <></>

    <div className='main'>
      <img src={props.img} alt='logo'></img>

      <div className='content'>
        <h3>{props.name}  (-) {props.cost}</h3>
        <p className='description'>{props.desc}</p>

        {/* //this is an example of conditional rendering  */}
        {isshown && <a href={props.a} className='link'>For more information visit : {props.name}</a>}{/*line x*/} 
        <button onClick={shown} id='button1'>{isshown ? "Show Less" : "Show More"}</button>

        {/*1. first look at the button, when button is clicked it will call the shown() function which will change the  isshown condition to its negation. Simultaneously ,{isshown ? "Show Less" : "Show More"} will also change depending on the isshown value.
           2. At the same time we have put a && symbol in line x so that only when the expression value is true, the anchor tag wil be printed ,i.e when isshown is true then then the tag will be printed.
           3. All in all what's happening : 
              A. Initially the isshown values is false, so  line x is not printed and button shows 'show more'.
              B. When the button is clicked the shown function changes isshown value to true.
              C. So now line x becomes true so it is printed.Consequently the button displays 'show less' as the isshown values is true*/}

      </div>    
      </div>
  );
}

export default Body;

