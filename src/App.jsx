import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { createBrowserRouter,RouterProvider} from 'reac'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
       <header>
       <div>
      <h1>BlOckZoNe</h1>
    </div>
    <nav>
      <a href="#">Register Tol</a>
      <a href="#">Register Bank</a>
      <a href="#">Register User</a>
    </nav>
    <input type="text" className="search-bar" placeholder="Don't Search Anything Here..."></input>
    <button className="connect-button">Connect Wallet</button>
       </header>
       <div className='main-div'>
        <div className="main-image">
          <h1 className='quote'>Accelerating the Web3 Fast Lane: BlockZone - Your Gateway to Seamless, Decentralized Transactions.</h1>
        </div>
       </div>
       <div className='images'><img src="https://www.bankit.in/uploads/category/7148fastagImage.png" alt="" /></div>

    </>
  )
}

export default App
