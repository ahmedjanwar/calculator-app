import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

export const Calculator = () => {

  //declaring the hook (State)
  const [number,setNumber] = useState('')

  //event handler function

  // put to our screen
  const handleClick =(e) =>{
        setNumber(number.concat(e.target.value))
  }
  // clearing screen
  const handleClear =() =>{
    setNumber('')
    }
  // clicing (C)
  const handleClice =() =>{
    setNumber(number.slice(0,-1))
    }
  //Handling the Answer
    const handleAnswer =() =>{
        try{
            setNumber(eval(number).toString())
        }catch(error){
            setNumber('Invalid')
        }
  }


  return (
    <React.Fragment>
        <section>
        <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        {/** App name section */}
                <div className='text-orange-700 w-full font-bold text-3xl h-16 flex items-center space-x-2 '>
                    <GiHamburgerMenu />
                    <p>Calculator</p>
                </div>
                {/* screen section*/}
                <div className='w-full h-10 '>
                    <input type='text' placeholder='0' 
                    className='w-full h-10 border-black text-4xl text-right pr-5' 
                    value={number}></input>
                </div>
                {/* keypad section*/}
                <div className='grid grid-cols-4 gap-2 mt-10 mx-2'>
                    <button onClick={handleClear} className='text-black w-15 h-15 bg-red-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
                    <button onClick={handleClice} className='text-black w-15 h-15 bg-blue-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
                    <button value ='/' onClick={handleClick} className='text-black w-15 h-15 bg-blue-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
                    <button value ='*' onClick={handleClick} className='text-black w-15 h-15 bg-blue-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow '>*</button>

                    <button value ={7} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>
                    <button value ={8} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
                    <button value ={9} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button>
                    <button value ='-' onClick={handleClick} className='text-black w-15 h-15 bg-blue-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow '>-</button>

                    <button value ={4} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
                    <button value ={5} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
                    <button value ={6} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
                    <button value ='+' onClick={handleClick} className='text-black w-15 h-15 bg-blue-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button>

                    <button value ={1} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
                    <button value ={2} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
                    <button value ={3} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>


                    <button value ='.' onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
                    <button value ={0} onClick={handleClick} className='text-black w-15 h-15 bg-gray-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
                    <button onClick={handleAnswer} className='text-black w-15 h-15 bg-blue-500 hover:bg-purple-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>

                </div>
            </div>
            </div>
        </section>
    </React.Fragment>
  )
}
