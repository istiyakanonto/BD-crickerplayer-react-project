import logo from './logo.svg';
import './App.css';
import playersData from './FakeData/data.json'

function App() {
  console.log(playersData)
  return (
    <div className="App">
     <ul>
       {
         playersData.map(data=> <li>{data.first_name}</li>)
       }
     </ul>
    </div>
  );
}

export default App;
