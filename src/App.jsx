import './App.css'
import LineChart from './assets/Components/LineChart/LineChart'
import Navbar from './assets/Components/Navbar/Navbar'
import Phones from './assets/Components/Phones/Phones'
import PriceOptions from './assets/Components/PriceOptions/PriceOptions'
// import DaisyNav from './assets/Components/DaisyNav'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-2 md:mx-5 lg:mx-auto font-serif'>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <Phones></Phones>
      </div>
    </>
  )
}

export default App
