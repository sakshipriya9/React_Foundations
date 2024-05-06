import DogTile from "./DogTile";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="header"> Learning React Components !!!</h1>
       <section className="puppy">
      <DogTile />
      <DogTile />
      <DogTile />
      <DogTile />
      <DogTile />
     </section>
   </div>
   
  );
}

export default App;
