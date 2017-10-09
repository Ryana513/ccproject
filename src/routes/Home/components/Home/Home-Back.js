import React from 'react'
import { Parallax } from 'react-materialize'
import assign from '../../assets/ic_assignment_black_48px.svg'
import gears from '../../assets/videogears.mov'

const style = {
  mainDiv: {},
  headerMD: {
    margin: 'auto',
    width: '15%',
    padding: 10
  },
  secHeader: {},
  image: {}
}

export const HomeBack = () => {
  return (
    <div>
      <video playsinline autoPlay muted loop poster="polina.jpg" id="bgvid">
        <source src={gears} type="video/mp4" />
      </video>
      <h5 style={style.headerMD}>How it Works</h5>
      <div className="row">
        <div className="col s4">
          <img src={assign} />
          <h1>Search Developers</h1>
          <p>
            Login to search the developer database. Find the developer with the
            skills to best suit your needs.Login to search the developer
            database. Find the developer with the skills to best suit your
            needs.Login to search the developer database. Find the developer
            with the skills to best suit your needs.Login to search the
            developer database. Find the developer with the skills to best suit
            your needs.Login to search the developer database. Find the
            developer with the skills to best suit your needs.
          </p>
        </div>
        <div className="col s4">
          <img src={assign} />
          <h1>Search Developers</h1>
          <p>
            Login to search the developer database. Find the developer with the
            skills to best suit your needs.Login to search the developer
            database. Find the developer with the skills to best suit your
            needs.Login to search the developer database. Find the developer
            with the skills to best suit your needs.Login to search the
            developer database. Find the developer with the skills to best suit
            your needs.Login to search the developer database. Find the
            developer with the skills to best suit your needs.
          </p>
        </div>
        <div className="col s4">
          <img src={assign} />
          <h1>Search Developers</h1>
          <p>
            Login to search the developer database. Find the developer with the
            skills to best suit your needs.Login to search the developer
            database. Find the developer with the skills to best suit your
            needs.Login to search the developer database. Find the developer
            with the skills to best suit your needs.Login to search the
            developer database. Find the developer with the skills to best suit
            your needs.Login to search the developer database. Find the
            developer with the skills to best suit your needs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeBack
