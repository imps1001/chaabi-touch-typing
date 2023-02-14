/* eslint-disable eqeqeq */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import setOfWords from '../setOfWords'
import {Link } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Exercise() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const[mode, SetMode] = useState('Start');
  const[Msg, SetMsg] = useState("");
  const[start, setStart] = useState(null);
  const msg = document.getElementById('msg');
  const typeWords = document.getElementById('mywords');
  let endTime;
  //   dynamic typing test
//   1: when user pressed start button then show the 
//   2: Every time a new set of lines on top. Whenever a start button is
//   pressed. Not the Done one.
//   3: get the time and change the button text to Done.
//   4: get the end time when user clicked on Done button. find the total
//   time taken.
//   5: find the total words on the setofwords.
//   6: Find the speed of the user and show it on top when user clicked on
//   Done.
//   7: then call the compareWords fun and find how many of the words are
//   matching and how many not. Display the result on top with speed.

  function handleEvent(event){
    if(mode ==='Start'){
    playGame();
    typeWords.value='';
    }else if(mode === 'Done') {
        endPlay();
    }
    }
    const playGame= ()=> {
        let randomNumber = Math.floor(Math.random()*setOfWords.length);
        SetMsg(setOfWords[randomNumber]);
        let date = new Date();
        setStart(date.getTime());
        console.log(start);
        SetMode("Done");
    }
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    console.log(endTime);
    console.log(start);
    let totalTime = ((endTime-start)/1000);
    console.log(totalTime)
    let totatStr = typeWords.value;
    console.log(totatStr);
   let wordCount = wordCounter (totatStr);
   let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg ="WPM: " + speed +" &";
    finalMsg += compareWords(msg.innerText, totatStr);
    SetMsg(finalMsg);
    SetMode("Start");
}
const compareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    //-arrayName then-foreach then it will take whole function with value and index no. of that array
    words1.forEach(function (item, index) {
    if (item === words2[index]) {
    cnt++;
     }
    })
    console.log(cnt)
    let accuracy = (cnt/words1.length)*100;
    console.log(accuracy);
    return ("Accuracy: " + accuracy +"% ");
}
const wordCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
    }

    const UrgeWithPleasureComponent = () => (
        <CountdownCircleTimer
          isPlaying ="false"
          duration={60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[20, 15, 10, 5]}
          size={80}
          onComplete={() =>{
            endPlay()
          }
        }
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      )
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1 text-center">
            <Link to="/" href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Chaabi</span>
              <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >

              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 justify-center">
           <div className="font-bold text-xl">
            Chaabi</div>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Chaabi</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-4">
                <div className="font-bold text-lg">
            Chaabi
            </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
      <div className="mainDiv">
      <div className="centerDiv">
        <div className="timer text-blue-600 font-semibold mb-0">
         {mode ==="Done"?<UrgeWithPleasureComponent isPlaying="true" />: "⬇️Click on Start to test!!"}
        </div>
          <h1 className="py-3 font-bold text-xl uppercase"> Welcome to Chaabi Typing Test </h1>
          <h2 id="msg" >{Msg} </h2>
          <textarea id="mywords" className="py-4 border-solid rounded-md border-2 border-blue-500 bg-gray-600 text-white" cols="100" rows="2" placeholder="Start typing"></textarea>
          <br></br>
          <button id="btn" onClick={handleEvent} className="mainbtn rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm 
          hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{mode}</button>
      </div>
      </div>
      </main>
    </div>
  )
}
