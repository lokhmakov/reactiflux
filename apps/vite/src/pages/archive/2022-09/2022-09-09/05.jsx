// import {useState} from 'react'
// import {Link, NavLink} from 'react-router-dom'
// import './navbar.css'
// import Logo from '../images/logo.png'
// import {links} from '../data'
// import {GoThreeBars} from 'react-icons/go'

// const Navbar = () => {
//   const [isNavShowing, setIsNavShowing] = useState(false)

//   return (
//     <nav>
//       <div className="container nav__container">
//         <Link to="/" className="logo">
//           <img src={Logo} alt="Nav Logo" />
//         </Link>

//         <ul
//           className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}
//         >
//           {links.map(({name, path}, index) => {
//             return (
//               <li>
//                 <NavLink
//                   to={path}
//                   className={({isActive}) => (isActive ? 'active-nav' : '')}
//                 >
//                   {name}
//                 </NavLink>
//               </li>
//             )
//           })}
//         </ul>

//         <button className="nav__toggle-btn">
//           <GoThreeBars />
//         </button>
//       </div>
//     </nav>
//   )
// }
// export default Navbar
