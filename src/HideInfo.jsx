import { useState } from 'react';

 const HideInfo = ({text, maxLength}) => {
     const [hidden, setHidden] = useState(true);

     if(text.length <=maxLength){
         return <span>{text}</span>
     }

     return ( 
         <span>
             {hidden ? `${text.substr(0,maxLength).trim()}...` : text}

             {hidden ? (
                 <button onClick={() => setHidden(false)}>Expand Text</button>
             ) : (
                 <button onClick={() => setHidden(true)}>Compact Text</button>
             )}
         </span>
     );
 }

 export default HideInfo;
