import './App.css'

function moreInfo() {
  return window.alert('Danger, Danger')
}

function App() {
  return(
    
    <div className='App'>
      <h1 style={{fontSize:'52px'}}>Golf Ballers</h1>
      <img 
      height="200px"
      width="400px"
      alt = 'Royal Cat' 
      src='https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg'/>
      <p style={{fontSize:'22px'}}>Cats R Us are all about our fluffy feline friends - the cats!
      </p>
      <button onClick={moreInfo}>Click For More Info</button>
      <br/>
      
    </div>)
}

export default App;