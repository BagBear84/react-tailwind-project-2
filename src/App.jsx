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
import {ReactComponent as Badge} from './images/Badge.svg'
import {ReactComponent as Vector} from './images/Vector.svg'
import {ReactComponent as VectorWindow} from './images/Vector-window.svg'
import {ReactComponent as Stars} from './images/stars.svg'
import {ReactComponent as PlayeIcon} from './images/player-icon.svg'
import mobile from './images/Mobile.png'
import world from './images/world.png'
import euro from './images/euro.png'
import accessibility from './images/accessibility.png'
import macBook from './images/Macbook.png'
import tablet from './images/Picture-Tablet.png'
import artMobile from './images/Col.png'
import mobiles from './images/ColMobile.png'
import desktopmobile from './images/DesktopMobile.png'


function App() {
  // const [elHeight , setElHeight] = useState()

  // let el1Height;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     el1Height = Math.round(document.getElementById('Masked').getBoundingClientRect().height)
      
  //     setElHeight(el1Height)
  //   },50)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])

  // let heightHandler = () => {
  //   return (
  //     <div className={`px-4 relative bg-gray-600 z-0 h-[${elHeight}px]`}></div>
  //   )
  // }


  return (
    <div className="App font-roboto text-center">
      <header className='bg-gray-600 '>
        <div className=' flex items-center justify-between p-4 lg:px-20 lg:py-6 font-bold text-[32px] 3xl:text-[56px] text-white'>
          <div className='lg:flex lg:items-center lg:gap-12'>
           <p>mabi</p>
           <div className='items-center gap-12 font-medium text-base 3xl:text-3xl hidden lg:flex'>
            <a href="#">Home</a>
            <a href="#">Solutions</a>
            <a href="#">Pricing</a>
            <a href="#" className='flex items-center'>Resources<VectorWindow className='-rotate-90 fill-white w-2 3xl:w-4 ml-4'/></a>
           </div>
          </div>
          <div className='lg:font-medium lg:text-base lg:flex lg:gap-4'>
            <button className='lg:hidden'><Hamburger className='fill-white'/></button>
            <button className='font-bold 3xl:text-3xl p-3 px-7 border-2 rounded-full border-white hidden lg:block'>Free Launch</button>
            <button className='font-bold 3xl:text-3xl p-3 px-7 border-2 rounded-full bg-white text-gray-600 border-white hidden lg:block'>Free Launch</button>
          </div>
        </div>
      </header>
      <section className='text-white '>
        <div className='lg:relative lg:grid lg:grid-cols-2 lg:items-center lg:px-20 bg-gray-100'>
          <div className='space-y-8 px-4 lg:p-0 pt-7 pb-8 bg-gray-600 lg:bg-transparent lg:text-left lg:z-20'>
            <div className='font-bold lg:font-extrabold'>
              <p className='text-[40px] xl:text-7xl 3xl:text-8xl'>Launch Your App</p>
              <p className='text-[32px] xl:text-[56px] 3xl:text-7xl text-gray-300'>Grow Your Business</p>
            </div>
            <p className='text-lg xl:text-2xl 3xl:text-3xl'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
            <button className='font-bold text-2xl 3xl:text-3xl px-12 py-5 border-2 rounded-full border-white'>Free Launch</button>
          </div>
          
          <div className='relative lg:w-full ml-auto z-10 lg:z-20'>
            <div className='absolute inset-0 lg:hidden -top-1 -z-10 bg-gray-600 [clip-path:polygon(0%_0%,0%_85%,100%_75%,100%_0%)]'></div>

            <div className='mx-auto w-full z-0'>
              <img src={mobile} className='w-full' alt="" />
            </div>
          </div>
          <div className='absolute inset-0 lg:block hidden -z-0 bg-gray-600 [clip-path:polygon(0%_0%,0%_98%,95%_75%,100%_0%)]'></div>
        </div>
        <div className='bg-gray-100'>
          <div className='py-12 px-4 space-y-8'>
            <p className='font-bold text-[32px] text-gray-900 lg:font-extrabold lg:text-[56px] 3xl:text-7xl'>Our Top Partners</p>
            <div className='flex flex-col space-y-4 items-center font-bold text-xs lg:text-base 3xl:text-3xl'>
              <div className='flex gap-4 flex-wrap'>
                <div className='flex  items-center gap-1 text-gray-900'><Logo className='w-5 h-5 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>Astrom</p></div>
                <div className='flex  items-center gap-1 text-gray-900'><Logo1 className='w-5 h-4 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>cicio</p></div>
                <div className='flex  items-center gap-1 text-gray-900'><Logo2 className='w-5 h-4 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>weavy</p></div>
                <div className='flex  items-center gap-1 text-gray-900'><Logo3 className='w-5 h-5 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>vRokets</p></div>
                <div className='flex  items-center gap-1 text-gray-900'><Logo4 className='w-6 h-5 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>viewio</p></div>
              </div>
              <div className='flex gap-4 flex-wrap'>
                <div className='flex  items-center gap-1 text-gray-900'><Logo5 className='w-5 h-4 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>Metablu</p></div>
                <div className=' text-gray-900'><Logo6 className='w-8 h-3 lg:w-10 3xl:w-16 3xl:h-6' /><p>Buildaa</p></div>
                <div className='flex  gap-1 items-center text-gray-900'><Logo7 className='w-5 h-5 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>hapi</p></div>
                <div className='flex  gap-1 items-center text-gray-900'><Logo8 className='w-8 h-8 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /></div>
                <div className='flex  gap-1 items-center text-gray-900'><Logo9 className='w-5 h-3 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12' /><p>virtuo</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 py-12 space-y-8'>
        <p className='font-bold text-[32px] lg:font-extrabold lg:text-[56px] 3xl:text-7xl'>How it works</p>
        <div className='space-y-8 lg:space-y-0 text-base lg:text-xl 3xl:text-3xl lg:gap-8 max-w-sm mx-auto lg:max-w-none lg:flex'>
          <div className='border-4 border-gray-400 rounded-xl'>
            <div className='px-4 py-8 space-y-4'>
              <Timer className='mx-auto'/>
              <p className='text-gray-900'>
                Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.
              </p>
            </div>
          </div>
          <div className='border-4 border-gray-500 rounded-xl'>
            <div className='px-4 py-8 space-y-4'>
              <Branches className='mx-auto'/>
              <p className='text-gray-900'>
                Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.
              </p>
            </div>
          </div>
          <div className='border-4 border-gray-600 rounded-xl'>
            <div className='px-4 py-8 space-y-4'>
              <Stars className='mx-auto'/>
              <p className='text-gray-900'>
                Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 py-12 lg:p-20 lg:items-center bg-gray-100 lg:grid lg:grid-cols-2'>
        <div className='space-y-8 3xl:space-y-16 lg:text-left'>
          <p className='font-bold text-[32px] lg:font-extrabold lg:text-[56px] 3xl:text-7xl'>Turpis risus facilisi</p>
          <p className='text-gray-900 3xl:text-3xl'>
            Augue feugiat mi, massa amet. Id purus aliquam bibendum purus dictum elementum nullam odio tellus. Imperdiet feugiat est odio fames magna orci. Augue purus aliquam, placerat vestibulum dictum pellentesque molestie. Facilisis pretium porta congue proin.
          </p>
        </div>
        <div className=''>
          <div className='relative mx-auto w-fit lg:w-full 3xl:mx-0 mt-16 lg:mt-0'>
            <div>
              <img src={macBook} className='relative lg:w-full' alt="" />
              <PlayeIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            <img src={tablet} className='absolute -top-12 -right-4 lg:w-2/5' alt="" />
          </div>
        </div>
      </section>
      <section className='px-4 py-12 lg:p-20 space-y-8 lg:items-center bg-gray-100 lg:grid lg:grid-cols-6'>
        <div className='space-y-8 3xl:space-y-16 lg:order-last lg:col-span-4 lg:text-left'>
          <p className='font-bold text-[32px] lg:font-extrabold lg:text-[56px] 3xl:text-7xl'>Sagittis sapien viverra</p>
          <p className='text-base lg:text-xl 3xl:text-3xl'>
            Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus bibendum risus auctor lacus tristique arcu. Arcu hac cursus faucibus id. Eu integer parturient risus magna eget massa. Risus molestie tempor, faucibus non ultricies. Nam vel mattis quis dui, condimentum mi volutpat ut aliquam.
          </p>
        </div>
        <div  className='mx-auto w-fit lg:w-full 3xl:mx-0 lg:col-span-2'>
          <img src={artMobile} className='lg:w-5/6' alt="" />
        </div>
      </section>
      <section className='px-4 py-12 lg:p-20 lg:items-center space-y-8 bg-gray-100 lg:grid lg:grid-cols-5'>
        <div className='space-y-8 lg:col-span-3 lg:text-left'>
          <p className='font-bold text-[32px] lg:font-extrabold lg:text-[56px] 3xl:text-7xl'>Non commodo nec</p>
          <p className='text-base lg:text-xl 3xl:text-3xl'>
            Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui. Curabitur in commodo pretium lacinia feugiat. A ultricies quis commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra, id id.
          </p>
        </div>
        <div  className=' mx-auto w-fit lg:w-full 3xl:mx-0 lg:col-span-2'>
          <img src={mobiles} className='lg:w-5/6' alt="" />
        </div>
      </section>
      <section className='relative -z-20 bg-gray-100'>
        
        <div className='lg:grid lg:grid-cols-2 lg:items-center lg:p-20'>
          <div className='relative pt-20 lg:pt-0'>
            <div className='bg-gray-600 absolute inset-0 -bottom-1 -z-10 lg:hidden [clip-path:polygon(5%_50%,0%_100%,100%_100%,100%_0%)]'></div>

            <div className='bg-transparent mx-auto w-fit lg:w-full'>
              <img src={desktopmobile} className='lg:w-11/12' id='Masked' alt="" />
            </div>
          </div>
          <div className='bg-gray-600 lg:bg-transparent space-y-8 3xl:space-y-16 text-white pb-20 lg:pb-0 lg:text-left'>
            <p className='font-bold text-[32px] lg:font-extrabold xl:text-[56px] 3xl:text-7xl'>Launch Your App Today</p>
            <p className='text-base xl:text-2xl 3xl:text-3xl'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
            <button className='font-bold text-2xl 3xl:text-3xl px-12 py-5 border-2 rounded-full border-white'>Free Launch</button>
          </div>
          <div className='bg-gray-600 absolute inset-0 hidden lg:block -bottom-1 -z-10 [clip-path:polygon(5%_35%,0%_100%,100%_100%,100%_0%)]'></div>

        </div>
      </section>
      <footer className='bg-gray-600 3xl:text-3xl px-4 lg:px-20 text-white'>
        <div className='py-12 font-medium space-y-14 lg:space-y-0 border-b border-gray-700 lg:grid lg:grid-cols-6 lg:text-left'>
          <p className='font-bold text-[32px] 3xl:text-[56px] lg:-mt-4'>mabi</p>
          <div className=' space-y-6'>
            <p>Product</p>
            <div className='text-gray-200 space-y-6 font-normal'>
              <p>Pricing</p>
              <p>Overview</p>
              <p>Browse</p>
              <p className='flex justify-center lg:justify-start items-center gap-2'>Accessibility<Badge /></p>
            </div>
          </div>
          <div className='space-y-6'>
            <p>Solutions</p>
            <div className='text-gray-200 space-y-6 font-normal'>
              <p>Brainstorming</p>
              <p>Ideation</p>
              <p>Wireframing</p>
              <p>Research</p>
            </div>
          </div>
          <div className='space-y-6'>
            <p>Resources</p>
            <div className='text-gray-200 space-y-6 font-normal'>
              <p>Help Center</p>
              <p>Blog</p>
              <p>Tutorials</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className='space-y-6'>
            <p>Support</p>
            <div className='text-gray-200 space-y-6 font-normal'>
              <p>Contact Us</p>
              <p>Developers</p>
              <p>Documentation</p>
              <p>Integrations</p>
            </div>
          </div>
          <div className='space-y-6'>
            <p>Company</p>
            <div className='text-gray-200 space-y-6 font-normal'>
              <p>About</p>
              <p>Press</p>
              <p>Events</p>
              <p className='flex justify-center lg:justify-start items-center gap-2'>Request Demo<Vector className='w-4 fill-white' /></p>
            </div>
          </div>
        </div>
        <div className='space-y-4 mt-6 lg:m-0 lg:py-9 lg:flex lg:justify-between lg:items-center'>
          <p>@ 2023 Mabi. All rights reserved.</p>
          <div className='space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-8'>
            <div className='flex justify-center gap-8'>
              <button>Terms</button>
              <button>Privacy</button>
              <button>Contact</button>
            </div>
            <div className='flex justify-center gap-8 pb-6 lg:pb-0'>
              <p className='flex justify-center items-center gap-2'><img src={world} className='3xl:w-10' alt="" />EN</p>
              <p className='flex justify-center items-center gap-2'><img src={euro} className='3xl:w-10' alt="" />EUR</p>
              <p><img src={accessibility} className='3xl:w-10' alt="" /></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
