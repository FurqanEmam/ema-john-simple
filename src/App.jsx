import { useState } from 'react'
import './App.css'


import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Shop from './components/Shop/Shop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      {/* <Product></Product> */}
    </div>
  )
}

export default App
