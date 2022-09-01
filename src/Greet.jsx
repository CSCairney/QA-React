import { useEffect } from 'react';

 const Greet = ({ name }) => {
 const message = `Evening Gamer, ${name}!`;

 useEffect(() => {
     console.log(`Use Effect Running here ${name}`);
     document.title = `Welcome to my world ${name}`; 
 }, [name]);

 return (
    <div className='Component'>
        <h1>Salam</h1> 
        {message}
    </div>
 );
 };

 export default Greet;