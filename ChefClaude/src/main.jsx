import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header/Header.jsx'
import Pad from './Components/Pads_challenge/Pads.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <App />
    <Pad />
  </>
)
