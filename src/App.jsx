import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimplePromise from './componentes/SimplePromise'
import AsincAwaiPromise from './componentes/asincAwaiPromise'
import Example1 from './componentes/example1'
import Example2 from './componentes/Example2'
import ExampleAxios from './componentes/ExampleAxios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimplePromise/>
    </>
  )
}

export default App
