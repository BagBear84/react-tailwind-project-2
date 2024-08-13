import './App.css';
import { useEffect, useRef, useState } from 'react';

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
import {ReactComponent as PlayeIcon} from './images/player-icon.svg'
import mobile from './images/Mobile.png'
import macBook from './images/Macbook.png'
import tablet from './images/Picture-Tablet.png'
import artMobile from './images/Col.png'
import mobiles from './images/ColMobile.png'
import desktopmobile from './images/DesktopMobile.png'


function App() {
  const [elHeight , setElHeight] = useState()

  let el1Height;

  useEffect(() => {
    const timer = setTimeout(() => {
      el1Height = Math.round(document.getElementById('Masked').getBoundingClientRect().height)
      
      setElHeight(el1Height)
    },50)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  // let heightHandler = () => {
  //   return (
  //     <div className={`px-4 relative bg-gray-600 z-0 h-[${elHeight}px]`}></div>
  //   )
  // }


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
      <section className='px-4 py-12 bg-gray-200'>
        <div className='space-y-8'>
          <p className='font-bold text-[32px]'>Turpis risus facilisi</p>
          <p className='text-base'>
            Augue feugiat mi, massa amet. Id purus aliquam bibendum purus dictum elementum nullam odio tellus. Imperdiet feugiat est odio fames magna orci. Augue purus aliquam, placerat vestibulum dictum pellentesque molestie. Facilisis pretium porta congue proin.
          </p>
        </div>
        <div className=''>
          <div className='relative w-fit mx-auto mt-16'>
            <div>
              <img src={macBook} className='relative' alt="" />
              <PlayeIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            <img src={tablet} className='absolute -top-12 -right-4' alt="" />
          </div>
        </div>
      </section>
      <section className='px-4 py-12 space-y-8 bg-gray-200'>
        <div className='space-y-8'>
          <p className='font-bold text-[32px]'>Sagittis sapien viverra</p>
          <p className='text-base'>
            Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus bibendum risus auctor lacus tristique arcu. Arcu hac cursus faucibus id. Eu integer parturient risus magna eget massa. Risus molestie tempor, faucibus non ultricies. Nam vel mattis quis dui, condimentum mi volutpat ut aliquam.
          </p>
        </div>
        <div  className='w-fit mx-auto'>
          <img src={artMobile} alt="" />
        </div>
      </section>
      <section className='px-4 py-12 space-y-8 bg-gray-200'>
        <div className='space-y-8'>
          <p className='font-bold text-[32px]'>Non commodo nec</p>
          <p className='text-base'>
            Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui. Curabitur in commodo pretium lacinia feugiat. A ultricies quis commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra, id id.
          </p>
        </div>
        <div  className='w-fit mx-auto'>
          <img src={mobiles} alt="" />
        </div>
      </section>
      <section className='relative -z-20 bg-gray-200'>
        
        <div className='relative pt-20'>
          <div className='bg-gray-600 absolute top-0 right-0 left-0 bottom-0 -z-10 [clip-path:polygon(5%_50%,0%_100%,100%_100%,100%_0%)]'></div>

          <div className='bg-transparent mx-auto w-fit'>
            <img src={desktopmobile} id='Masked' alt="" />
          </div>
        </div>
        <div className='bg-gray-600 space-y-8 text-white pb-20'>
          <p className='font-bold text-[32px]'>Launch Your App Today</p>
          <p className='text-base'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
          <button className='font-bold text-2xl px-12 py-5 border-2 rounded-full border-white'>Free Launch</button>
        </div>
      </section>
    </div>
  );
}

export default App;
