import './App.css'

function App(props){
  return (
    <div className='box'>
      <div><img id='img' src={props.img} alt='logo'></img></div>
      <div className='movie'>
          <h3>{props.name}</h3>
          <p className='genre'>{props.genre}</p>
          <p className='rating'>Rating : {props.rating}</p>
          <p className='ticket'>Buy your tickets now -- <a href={props.ticket}>here</a></p>
      </div>
    </div>
  )
};

export default App;
