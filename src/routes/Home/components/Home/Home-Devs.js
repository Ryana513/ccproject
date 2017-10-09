import React from 'react'
import Paper from 'material-ui/Paper'
import ryanj from '../../assets/ryanj.jpg'
import drew from '../../assets/drew.jpg'
import sdg from '../../assets/sdg.jpg'
import ryanW from '../../assets/ryanW.jpg'
import bghero from '../../assets/bg-hero-online.jpg'
// import { BrowserRouter as NavLink } from "react-router-dom";

const style = {
  height: 212,
  width: 212,
  margin: 22,
  textAlign: 'center',
  display: 'inline-block',
  border: '15px solid teal',
  offset: 1,
  div: {
    margin: 'auto',
    width: '98%',
    padding: 10,
    backgroundImage: "url('../../assets/bg-hero-online.jpg')"
  }
}
const pic = { borderRadius: 85 }

const devPic = img => {
  return <img style={pic} width={200} height={200} src={img} />
}

export const HomeDevs = props => {
  return (
    <div style={style.div}>
      <div className="col s5 pull-s7">
        <Paper style={style} zDepth={5} circle children={devPic(ryanW)} />
        <Paper style={style} zDepth={5} circle children={devPic(ryanj)} />
        <Paper style={style} zDepth={5} circle children={devPic(sdg)} />
        <Paper style={style} zDepth={5} circle children={devPic(drew)} />
      </div>
    </div>
  )
}

export default HomeDevs
