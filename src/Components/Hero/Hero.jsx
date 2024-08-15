// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import fron from '../../assets/fron.png' 
import { Link } from 'react-router-dom'
const Hero= () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
<h1>Discover Your Next Favorite Escape!</h1>

<p> At  we believe that entertainment is the gateway 
    to adventure, connection, and inspiration. Our mission is to make it 
    easy for you to explore a world of films, shows, games, and books tailored
     just for you. Whether youre in the mood for a gripping thriller,
      a heartwarming romance, or an immersive game, our personalized 
      recommendations will help you uncover hidden gems and popular hits 
      alike. Join our vibrant community of entertainment enthusiasts,
       share your thoughts, and let us guide you to your next favorite escape. 
       Dive in and experience the joy of discovering what you love,all in one place!</p>

       <Link to="/overview">
          <button className="btnn">
            Explore More <img src={fron} alt="" />
          </button>
        </Link>
        </div>
    </div>
  )
}

export default  Hero
