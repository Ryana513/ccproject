import React from 'react'
import { Footer } from 'react-materialize'
// import { BrowserRouter as NavLink } from "react-router-dom";

export const HomeFooter = props => {
  return (
    <div className="black">
      <Footer
        className="black center-block"
        copyrights={'\u00A9  2017 GET Me A Job'}
      />
    </div>
  )
}

export default HomeFooter