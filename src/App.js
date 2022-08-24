import './App.css';
import {useState} from 'react';

function App() {
  const mang = JSON.parse(localStorage.getItem('lstCV'))
  const [listCV, setListCV] = useState(mang ?? [])
  const [CV, setCV] = useState('')

  const addList = () =>{
    setListCV( prev =>{
      const ListCVTemp = [...prev,CV]
      const CDjson = JSON.stringify(ListCVTemp)
      localStorage.setItem('lstCV',CDjson)
      return ListCVTemp
    })
    console.log(listCV)
    setCV('')
  }
 
  return (
    <div className="App" style={{padding:40}}>
      <input 
      value={CV} 
      onChange={e=> setCV(e.target.value)}>

      </input>
      <button onClick={addList}>ADD</button>

      <ul>
        {
          listCV.map((job, index)=>(
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </div>


  );
}

export default App;
