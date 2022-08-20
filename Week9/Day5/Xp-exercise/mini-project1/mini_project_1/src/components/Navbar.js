import About from "./About"
import Home from "./Home"
import {Link} from 'react-router-dom'

const Navbar=()=>{
   return(
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">My Blog</a>
      <ul id="nav-mobile" class="right">
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/about'>About </Link></li>
        <li><Link to='/contact'>Contact </Link></li>
      </ul>
    </div>
  </nav>
   ) 
}
export default Navbar