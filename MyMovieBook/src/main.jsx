import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Data from './data.jsx'

const datael = Data.map(y=>{
  return <App img={y.img} name={y.name}  genre={y.genre} rating={y.rating} ticket={y.ticket}></App>
})

createRoot(document.getElementById('root')).render(
  <>
  <div className='maincont'>{datael}</div>
  
  </>
)
