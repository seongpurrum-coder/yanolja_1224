import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header1 from "./component/Header1"
import Menu from "./component/Menu"
import Slide from './component/Slide'
import Tab from './component/Tab'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header1></Header1>
        <Menu></Menu>
        <Slide></Slide>
        <Tab></Tab>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
