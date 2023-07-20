import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  //const [data,setData] = useState([]);
  const [character,setCharacter] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const open = '\u25bc'
  const close = '\u25b2'


  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/`)
    .then(res=>{
      //console.log(res.data);
       setCharacter(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[]);
  // TO DOs - state = set the data ; useEffect to setData = to API data
  
  console.log(character);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map(character=>{
        return <Character character={character} key={character.id} name={character.name} open={open} close={close}/>
      })}
    </div>
  );
}

export default App;
