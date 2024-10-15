import { useState } from "react";
import "./App.css";

function App() {
  // Making state for our app

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState(null);

  //Logic

  let calBMI =(e) =>{
    e.preventDefault();

    if(weight ===0 || height ===0){
      alert('Please enter a valid weight or height')
    }
    else {
      let bmi =(weight/(height*height)*704)
      setBmi(bmi.toFixed(1))
    }

    //Message Logic
    if (bmi < 18.5) {
      setMessage ('You are Underweight');} 
    else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('Your weight is Normal');} 
    else if (bmi >= 25 && bmi < 29.9) {
      setMessage('You are Overweight');} 
    else {
      setMessage('You are Obese')}
  }

    

  return (
    <div className="app">
      <main>
        <div className="heading">
          <h2>BMI calculator</h2>
        </div>
        <form>
          <div className="input-one">
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter Weight "
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="input-two">
            <label>Height (in)</label>
            <input
              type="number"
              placeholder={"Enter Height "}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button className="btn" type="submit" onClick={calBMI}>Submit</button>
        </form>
        <div className="result">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
      </main>
    </div>
  );
}

export default App;
