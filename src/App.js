import './App.css';
import QuoteBox from './Components/QuoteBox';



function App() {

  const {pColor} = QuoteBox
  return (
    
     <div className="App" style={{background: pColor}} >
      <QuoteBox />
      
     
    </div>
  );
}

export default App;
