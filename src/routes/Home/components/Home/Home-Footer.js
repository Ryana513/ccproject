import React from 'react'
import { Footer } from 'react-materialize'
// import { BrowserRouter as NavLink } from "react-router-dom";

export const HomeFooter = props => {
  return (
    <div className="black">
      <Footer
        className="black center-block"
        copyrights={'\u00A9  2017 GET Me A Job'}>
        <h5 className="white-text">GET Me A Job</h5>
        <p className="grey-text text-lighten-4">
          Here lies stuff about theis app, and more stuff...maybe some links and
          such.
        </p>
      </Footer>
    </div>
  )
}

export default HomeFooter
