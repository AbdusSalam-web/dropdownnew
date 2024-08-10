import './Navbar.css'

const Navbar = () => {
  return (
      <div className='nav'>
          <div className="navLogo">EV-oultion</div>
          <ul className="navMenu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">About</a></li>
              <li className='navContact'><a href="#" >Contact</a></li>
          </ul>
    </div>
  )
}

export default Navbar