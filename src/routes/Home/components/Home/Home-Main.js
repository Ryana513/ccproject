import React from 'react'
import { Slider, Slide } from 'react-materialize'
import compCoff from '../../../../img/comp_coff.jpg'
import tech from '../../assets/slide2tech-100.jpg'
import hero from '../../assets/bg-home-technologies.jpg'

// import { BrowserRouter as NavLink } from "react-router-dom";

export const HomeMain = props => {
  return (
    <div>
      <div>
        <Slider indicators={false}>
          <Slide src={compCoff} title="In Need of a Web Developer ?">
            Log-In to hire a developer for your next project.
          </Slide>
          <Slide src={tech} title="Fullstack Developers" placement="left">
            Equipped with the latest technologies.
          </Slide>
          <Slide src={hero} title="Our Developers Are..." placement="right">
            A great addition to any team.
          </Slide>
        </Slider>
      </div>
    </div>
  )
}

export default HomeMain
