import './index.css';
import Body from './components/body/Body.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import data from './data.jsx'
import React from 'react'
import { createRoot } from 'react-dom/client'



const datael = data.map(y=>{
  return <Body img={y.img} name={y.name} desc={y.desc} cost={y.cost} a={y.a}/>
})

createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <div className='maincontent'>

      {datael}

      {/* below given is the semi optimised method. */}
      {/* <Body 
      img = {Igp.img}
      name = {Igp.name}
      desc = {Igp.desc}
      cost = {Igp.cost}
      a = 'https://en.wikipedia.org/wiki/Igatpuri'
      />
      <Body 
      img = {P}
      name = 'Panchgani'
      desc = 'Located near Mahabaleshwar, it is an undiscovered tourist destination famous for its climate and scenery.'
      cost = '23,000'
      a = 'https://en.wikipedia.org/wiki/Panchgani'
      />
      <Body 
      img = {D}
      name = 'Dubai'
      desc = 'Dubai is a country in the United Arab Emirates, famous for its artificial islands, deserts and the Burj Khalifa which is the tallest building in the world.'
      cost = '2,50,000'
      a = 'https://en.wikipedia.org/wiki/Dubai'
      />
      <Body 
      img = {M}
      name = 'Meghalaya'
      desc = 'Located in the north-eastern part of India , this undiscovered state is famous for its clear waters, pristine lakes and numerous waterfalls. It is specially visited by tourists during the winter season due to its weather and scenery.'
      cost = '32,000'
      a = 'https://en.wikipedia.org/wiki/Meghalaya'
      />
      <Body 
      img = {E}
      name = 'Earth'
      desc = 'Part of the Solar System. It is the 3rd planet from the sun and has 1 moon.'
      cost = '43,000'
      a = 'https://en.wikipedia.org/wiki/Earth'
      /> */}
      
      <Footer />
    </div>
  </>
);
