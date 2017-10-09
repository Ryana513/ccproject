import React from 'react'
import { Parallax } from 'react-materialize'
import assign from '../../assets/ic_assignment_black_48px.svg'
import works from '../../assets/howitWorks_1.svg'

const style = {
  mainDiv: {},
  headerMD: {
    margin: 'auto',
    width: '20%',
    padding: 88,
    marginTop: -360,
    textAlign: 'center'
  },
  secHeader: {},
  image: {
    margin: 'auto',
    paddingLeft: '140px',
    paddingTop: '70px'
  },
  heroImage: {
    margin: 'auto',
    width: '100%',
    padding: 50
  }
}

export const HomeBack = () => {
  return (
    <div>
      <img height="430px" style={style.heroImage} src={works} />
      <div>
        <h5 style={style.headerMD}>How it Works</h5>
        <div className="row">
          <div className="col s4">
            <img style={style.image} src={assign} />
            <h1>Search Developers</h1>
            <p>
              Login to search the developer database. Find the developer with
              the skills to best suit your needs.Login to search the developer
              database. Find the developer with the skills to best suit your
              needs.Login to search the developer database. Find the developer
              with the skills to best suit your needs.Login to search the
              developer database. Find the developer with the skills to best
              suit your needs.Login to search the developer database. Find the
              developer with the skills to best suit your needs.
            </p>
          </div>
          <div className="col s4">
            <img style={style.image} src={assign} />
            <h1>Assign Projects</h1>
            <p>
              Login to search the developer database. Find the developer with
              the skills to best suit your needs.Login to search the developer
              database. Find the developer with the skills to best suit your
              needs.Login to search the developer database. Find the developer
              with the skills to best suit your needs.Login to search the
              developer database. Find the developer with the skills to best
              suit your needs.Login to search the developer database. Find the
              developer with the skills to best suit your needs.
            </p>
          </div>
          <div className="col s4">
            <img style={style.image} src={assign} />
            <h1>Best Tech Solutions</h1>
            <p>
              Login to search the developer database. Find the developer with
              the skills to best suit your needs.Login to search the developer
              database. Find the developer with the skills to best suit your
              needs.Login to search the developer database. Find the developer
              with the skills to best suit your needs.Login to search the
              developer database. Find the developer with the skills to best
              suit your needs.Login to search the developer database. Find the
              developer with the skills to best suit your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBack
