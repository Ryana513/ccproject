import React from 'react'
// import { Parallax } from 'react-parallax';
// import HomeDevs from '[]/Home-Devs';
import Paper from 'material-ui/Paper'
import ryanj from '../../assets/ryanj.jpg'
import drew from '../../assets/drew.jpg'
import sdg from '../../assets/sdg.jpg'
import ryanW from '../../assets/ryanW.jpg'
// import { BrowserRouter as NavLink } from "react-router-dom";

const style = {
  height: 212,
  width: 212,
  margin: 22,
  textAlign: 'center',
  display: 'inline-block',
  offset: 1
}
const pic = { borderRadius: 85 }

const devPic = img => {
  return <img style={pic} width={212} height={212} src={img} />
}

export const HomePara = props => {
  return (
    <div>
      <div className="col s5 pull-s7">
        <Paper style={style} zDepth={5} circle children={devPic(ryanW)} />
        <Paper style={style} zDepth={5} circle children={devPic(ryanj)} />
        <Paper style={style} zDepth={5} circle children={devPic(sdg)} />
        <Paper style={style} zDepth={5} circle children={devPic(drew)} />
      </div>
    </div>
  )
}

export default HomePara
