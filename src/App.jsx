import {puppyList} from './data.js'
import { useState } from 'react' 
import './index.css'

console.log(puppyList)

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState (null)
  console.log('puppyList: ', puppyList)
  function handleClick(){ 
    //logic 
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId) 
  // console.log('featuredpup', featuredPup)
  return (
    <>
      <div className='App'>
      { 
   puppies.map((puppy) => {
     return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
   })
}

   { featPupId && (
   <div className='App2'> 
    <h2>{featuredPup.name}</h2>
    <ul>
      <li> Age: {featuredPup.age} </li>
      <li> Email: {featuredPup.email} </li>
    </ul>
    </div>
      )}    
      </div>
      
   
    </>
  )
}

export default App 
