import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>

        {/* Button to link to homepage */}
        <a class="navbar-brand" >
        <img style={{ width: "3.5rem" }} src='https://img.freepik.com/premium-vector/blue-film-icon-with-words-cinema-it_731603-45.jpg?w=740'/>

    </a>
          <Link to='/' style={{textDecoration:'none'}}>
                <h1>Movies App</h1>
           </Link>
           {/* Button to link with favourites page */}
           <Link to='/favourites'style={{textDecoration:'none'}} >
               <h2 style={{marginLeft:'2rem' , marginTop:'0.7rem'}}>Favourites</h2>
           </Link>
      </div>
    )
  }
}

export default NavBar 