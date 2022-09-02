import { useState } from 'react';

const Car = () => {
    const [brand, setBrand] = useState("Nissan"); 
    const [model, setModel] = useState("370Z"); 
    const [colour, setColour] = useState("Midnight Purple");
    const [year, setYear] = useState(2019);
    const [engineSize, setEngineSize] = useState("3.7L");


    const clear = () => {
        setBrand("");
        setModel("");
        setColour("");
        setYear("");
        setEngineSize("");
    }

     return(
         <>
             <h1>The best affordable car in today society</h1>
             <h4>These are her features:</h4>
             
             <ul>
                <li>{brand},{model}</li>
                <li>{colour}</li>
                <li>{year}</li>
                <li>{engineSize}</li>
             </ul>

             <form>
                 <label> Brand:</label>
                 <input name="brand"
                     type="text"
                     value={brand}
                     onChange={e => setBrand(e.target.value)} />

                 <label> Model:</label>
                 <input name="model"
                     type="text"
                     value={model}
                     onChange={e => setModel(e.target.value)} />

                 <label> Colour:</label>
                 <input name="colour"
                     type="text"
                     value={colour}
                     onChange={e => setColour(e.target.value)} />

                 <label> Year:</label>
                 <input name="year"
                     type="text"
                     value={year}
                     onChange={e => setYear(e.target.value)} />
                 <br />

                 <label> Engine Size:</label>
                 <input name="engineSize"
                     type="text"
                     value={engineSize}
                     onChange={e => setEngineSize(e.target.value)} />
                 <br />
             </form>

             <button onClick={clear}>Clear results</button>
         </>
     );
 }

 export default Car;