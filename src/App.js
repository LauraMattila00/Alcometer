import {  useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState()
  const [bottles, setBottles] = useState()
  const [time, setTime] = useState()
  const [gender, setGender]= useState()
  const [result, setResult] = useState(Number)

  const calculate = (e) => {
    e.preventDefault()
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsleft = grams - (burning * time)
    let gramsresult = gramsleft / (weight * gender)

    if (gramsresult < 0) {
      gramsresult = 0;
    }

    setResult(gramsresult)

  }

  return (
    <div>
      <h2>Calculating alcohol blood level</h2>
      <form onSubmit={calculate}>
        <div>
          <label>Weight </label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label for="bottles">Bottles </label>
          <select type="number" name="bottles" onChange={e => setBottles(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label for="time">Time </label>
          <select type="number" name="time" onChange={e => setTime(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" value="0.7" name="gender" onChange={e => setGender(e.target.value)}/>Male
          <input type="radio" value="0.6" name="gender" onChange={e => setGender(e.target.value)}/>Female
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>   
  );
}

export default App;
