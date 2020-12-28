import React, { useState, useEffect } from 'react';
import ListAll from './Components/ListAll'
function App() {

  const [names, setNames] = useState([]);

  const getNames=()=>{
    fetch('names.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(response => response.json())
      .then(data => setNames(data.names))
    }

  useEffect(()=>{
    getNames()
  },[])

  return (
    
    <div className="app">
     <ListAll names={names}/>
    </div>
  );
}

export default App;
