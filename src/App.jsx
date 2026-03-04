import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Mainsection from './Components/MainSection/Mainsection'
import Navbar from './Components/Navbar/Navbar'
  import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Mainsection></Mainsection>
      <Footer></Footer>
      <div className='grid text-center items-center'>
        <ToastContainer />
      </div>

    </>
  )
}

export default App
