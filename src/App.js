import React, { useState, useEffect } from 'react'
import ListAll from './Components/ListAll'
import ListNames from './Components/ListNames'
import ToggleComponent from './Components/ToggleComponent'
import NamesTotalAmount from './Components/NamesTotalAmount'
import SearchNameAmount from './Components/SearchNameAmount'

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
     <ToggleComponent  btnText={'List all'} 
      component={<ListAll names={names}/>}
     />
     <ToggleComponent  btnText={'List names'} 
      component={<ListNames names={names}/>}
     />
     <ToggleComponent  btnText={'Total'} 
      component={<NamesTotalAmount names={names}/>}
     />
     <SearchNameAmount names={names}/>


    </div>
  )
}

export default App;
