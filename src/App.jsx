import { useEffect, useState } from 'react'
import './App.css'
import Register from './users/Register'
import UserList from './users/UserList'

function App() {
let [userData,setuserData]=useState([])


let userInfo={userData,setuserData}



  return (
           <div className="App">
             <div className='max-w-[1400px] mx-auto'>
              <div className='grid gap-6 grid-cols-[30%_auto]'>
                <Register userInfo={userInfo}/>
                <UserList userInfo={userInfo}/>
                
              </div>
             </div>
           </div>
  )
}

export default App
