import './App.css';

import {ReactComponent as Hamburger} from './images/Buttons Group.svg'
import mobile from './images/Mobile.png'

function App() {

  return (
    <div className="App font-roboto text-center">
      <header className='bg-gray-600 '>
        <div className=' flex items-center justify-between p-4 font-bold text-[32px] text-white'><p>mabi</p><button><Hamburger className='fill-white'/></button></div>
      </header>
      
    </div>
  );
}

export default App;
