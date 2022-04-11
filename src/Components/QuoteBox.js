import quote from '../assets/img/quote.svg';
import arrow from '../assets/img/arrow-right-circle-fill.svg';
import quotes from './quotes.json';
import { useState } from 'react';
import Color from './Color.json';

const QuoteBox = () => {
    const getRandom = () => Math.floor(Math.random()*quotes.length)
    const getRandomColor = () => Math.floor(Math.random()*Color.length)      
 
 
   

    const [pQuote, setpQuote] = useState (quotes[0])
    const [pAuthor, setAuthor] = useState(quotes[0])
    const [pColor, setpColor]  = useState(Color[0].background)
    

   

    const changeQuoteAuthor = (e) =>{
    setpQuote(quotes[getRandom()])
    setAuthor(quotes[getRandom()])
    setpColor(Color[getRandomColor()].background) 
    e.preventDefault()
   
    }
    document.body.style.background=pColor
    document.body.style.color=pColor
    
    
    return (         
        <div className="quote-touggle"  >
                <img className='quote-svg'src={quote} alt="" /> 
           
             <div className='p-Quote'>
                <p >{pQuote.quote}</p> 
             </div>
             <div className='p-Author'>
                <p >{pAuthor.author}</p>
             </div>

            
              <a className="img-arrow" href="" onClick= {changeQuoteAuthor} >
             <img  src={arrow} alt="" className='arrow-svg' />
             </a>    
             
        </div>
    );
};

export default QuoteBox;