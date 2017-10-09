import React from 'react'
import Theme from '../../../../theme'
// import {Card, CardTitle, CardPanel, Row, Col} from 'react-materialize';

const style = {
  margin: 80,
  textAlign: 'center',
  display: 'block'
}

export const HomeAbout = () => {
  return (
    <div style={style}>
      <h5 id="About">About "Get Me A Job"</h5>
      <p>
        This app was created by a group of Coder Camps graduates that love to
        code. “Get Me A Job” is the result of our final project. We wanted to
        create an app that would make it easy for employers to find developers
        with the right set of skills to complete their projects, and kickstart
        your project goals in a few of clicks. (DRAFT STILL EDITING]
      </p>
    </div>
  )
}

export default HomeAbout
