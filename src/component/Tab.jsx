import {Routes, Route, NavLink} from"react-router-dom"
import Musical1 from "./Musical1"
import Theater from "./Theater"
import Exhibit from "./Exhibit"

const Tab = () => {
  return(
    <>
      <div className='tab'>
        <div className='inner'>
          <h2>HOT! 인기 공연/전시</h2>
          
          <div className='tab-btn'>
            <NavLink to='/' activeClassName='active'>뮤지컬</NavLink>
            <NavLink to='/Theater' activeClassName='active'>연극</NavLink>
            <NavLink to='/Exhibit' activeClassName='active'>전시/행사</NavLink>
          </div>

          <div className='tab-con'>
            <Routes>
              <Route path="/" element={<Musical1></Musical1>}></Route>
              <Route path="/Theater" element={<Theater></Theater>}></Route>
              <Route path="/Exhibit" element={<Exhibit></Exhibit>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
export default Tab;