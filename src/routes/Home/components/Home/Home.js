import React from 'react'
import HomeMain from './Home-Main'
import HomeFooter from './Home-Footer'
import HomeAbout from './Home-About'
import HomeDevs from './Home-Devs'
import HomeBack from './Home-Back'
import HomeCTA from './Home-CTA'
// import { Link } from 'react-router';
// import { paths } from '../../../../constants';
// import classes from './Home.scss';
// const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper';
// const reactRouterUrl = 'https://github.com/ReactTraining/react-router';
export const Home = () => {
  return (
    <div>
      <HomeMain />
      <HomeCTA />
      <HomeAbout />
      <HomeDevs />
      <HomeBack />
      <HomeFooter />
    </div>
  )
}

export default Home
