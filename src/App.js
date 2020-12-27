import React, { useState, useEffect } from 'react';

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
      .then(data => 
        setNames(data.names))
    }

  useEffect(()=>{
    getNames()
  },[])

  return (
    <div className="app">
     { console.log(names) }
    </div>
  );
}

export default App;
