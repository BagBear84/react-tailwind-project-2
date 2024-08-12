import './App.css';

import {ReactComponent as Hamburger} from './images/Buttons Group.svg'
import {ReactComponent as Logo} from './images/Logo-colored.svg'
import {ReactComponent as Logo1} from './images/Logo-colored-1.svg'
import {ReactComponent as Logo2} from './images/Logo-colored-2.svg'
import {ReactComponent as Logo3} from './images/Logo-colored-3.svg'
import {ReactComponent as Logo4} from './images/Logo-colored-4.svg'
import {ReactComponent as Logo5} from './images/Logo-colored-5.svg'
import {ReactComponent as Logo6} from './images/Logo-colored-6.svg'
import {ReactComponent as Logo7} from './images/Logo-colored-7.svg'
import {ReactComponent as Logo8} from './images/Logo-colored-ipsum.svg'
import {ReactComponent as Logo9} from './images/Logo-colored-8.svg'
import {ReactComponent as Timer} from './images/timer.svg'
import {ReactComponent as Branches} from './images/branches.svg'
import {ReactComponent as Stars} from './images/stars.svg'
import mobile from './images/Mobile.png'

function App() {

  return (
    <div className="App font-roboto text-center">
      <header className='bg-gray-600 '>
        <div className=' flex items-center justify-between p-4 font-bold text-[32px] text-white'><p>mabi</p><button><Hamburger className='fill-white'/></button></div>
      </header>
      <section className='text-white bg-gray-600'>
        <div className='space-y-8 px-4 pt-7 pb-8'>
          <div className='font-bold'>
            <p className='text-[40px]'>Launch Your App</p>
            <p className='text-[32px] text-gray-300'>Grow Your Business</p>
          </div>
          <p className='text-lg'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
          <button className='font-bold text-2xl px-12 py-5 border-2 rounded-full border-white'>Free Launch</button>
        </div>
        
        <div className='mx-auto w-fit'>
          <img src={mobile} alt="" />
        </div>
        <div className='bg-gray-100'>
          <div className='py-12 px-4 space-y-8'>
            <p className='font-bold text-[32px] text-gray-900'>Our Top Partners</p>
            <div className='flex flex-col space-y-4 items-center'>
              <div className='flex gap-4 flex-wrap'>
                <div className='flex font-bold text-xs items-center gap-1 text-gray-900'><Logo className='w-5 h-5' /><p>Astrom</p></div>
                <div className='flex font-bold text-xs items-center gap-1 text-gray-900'><Logo1 className='w-5 h-4' /><p>Astrom</p></div>
                <div className='flex font-bold text-xs items-center gap-1 text-gray-900'><Logo2 className='w-5 h-4' /><p>Astrom</p></div>
                <div className='flex font-bold text-xs items-center gap-1 text-gray-900'><Logo3 className='w-5 h-5' /><p>Astrom</p></div>
                <div className='flex font-bold text-xs items-center gap-1 text-gray-900'><Logo4 className='w-6 h-5' /><p>Astrom</p></div>
              </div>
              <div className='flex gap-4 flex-wrap'>
                <div className='flex font-bold text-xs items-center gap-1 text-gray-900'><Logo5 className='w-5 h-4' /><p>Astrom</p></div>
                <div className='font-bold text-xs text-gray-900'><Logo6 className='w-8 h-3' /><p>Astrom</p></div>
                <div className='flex font-bold text-xs gap-1 items-center text-gray-900'><Logo7 className='w-5 h-5' /><p>Astrom</p></div>
                <div className='flex font-bold text-xs gap-1 items-center text-gray-900'><Logo8 className='w-5 h-5' /><p>Astrom</p></div>
                <div className='flex font-bold text-xs gap-1 items-center text-gray-900'><Logo9 className='w-5 h-3' /><p>Astrom</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 py-12 space-y-8'>
        <p className='font-bold text-[32px]'>How it works</p>
        <div className='space-y-8'>
          <div className='border-4 border-gray-400 rounded-xl'>
            <div className='px-4 py-8 space-y-4'>
              <Timer className='mx-auto'/>
              <p className='text-base text-gray-900'>
                Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.
              </p>
            </div>
          </div>
          <div className='border-4 border-gray-500 rounded-xl'>
            <div className='px-4 py-8 space-y-4'>
              <Branches className='mx-auto'/>
              <p className='text-base text-gray-900'>
                Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.
              </p>
            </div>
          </div>
          <div className='border-4 border-gray-600 rounded-xl'>
            <div className='px-4 py-8 space-y-4'>
              <Stars className='mx-auto'/>
              <p className='text-base text-gray-900'>
                Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
