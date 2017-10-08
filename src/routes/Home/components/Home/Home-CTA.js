import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

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
  }
}

const HomeCTA = () => (
  <div style={styles.div}>
    <RaisedButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.button}
      containerElement="label">
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
    <RaisedButton
      label="Label before"
      labelPosition="before"
      primary
      style={styles.button}
    />
    <RaisedButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      label="Github Link"
      secondary
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
)

export default HomeCTA
