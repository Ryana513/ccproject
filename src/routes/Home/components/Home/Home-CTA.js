import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { Link } from 'react-router'
import { paths } from '../../../../constants'
import { babyPowder } from 'material-ui/styles/colors'

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  },
  div: {
    margin: 'auto',
    width: '50%',
    padding: 10
  },
  divTop: {
    marginTop: 5

  }
}

const HomeCTA = () => (
  <div style={styles.divTop}>
    <div style={styles.div}>
      <RaisedButton
        onClick={paths.login}
        label={<Link to={paths.login}>Developer Sign-Up</Link>}
        labelPosition="before"
        secondary
        style={styles.button}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
      <RaisedButton
        onClick={paths.login}
        label={<Link to={paths.login}>Login</Link>}
        labelPosition="before"
        primary
        style={styles.button}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
      <RaisedButton
        onClick={paths.login}
        label={<Link to={paths.login}>Employer Sign-Up</Link>}
        labelPosition="before"
        backgroundColor="#D50000"
        labelColor={babyPowder}
        style={styles.button}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
    </div>
  </div>
)

export default HomeCTA
