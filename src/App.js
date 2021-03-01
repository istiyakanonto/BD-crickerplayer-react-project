import logo from './logo.svg';
import './App.css';
import playersData from './FakeData/data.json'
import { useState } from 'react';
import Player from './component/PlayerInfo/player';
import Result from './component/Result/Result';
function App() {
  const first10 = playersData.slice(0, 10)
  const [playersInfo, setPlayersInfo] = useState(first10)
  const [addPlayer, setAddPlayer]=useState([])
  const handleAddPlayer=(player)=>
  {
    const newPlayer=[...addPlayer,player]
  setAddPlayer(newPlayer)
  }
  return (
    <div className="result ">
 <div className='show-result'>
    <Result addPlayer={addPlayer}></Result>
     </div>
<div className='player-info'>
{
           playersInfo.map(play=><Player handleAddPlayer={handleAddPlayer} player={play}></Player>)
      }
</div>
</div>
)
}
export default App;
