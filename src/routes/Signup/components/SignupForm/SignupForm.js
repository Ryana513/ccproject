import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import {
  TextField,
  RadioButtonGroup,
  RadioButton
} from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import { SIGNUP_FORM_NAME } from '../../../../constants'
import { required, validateEmail } from '../../../../utils/form'
import classes from './SignupForm.scss'

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

const SignupForm = ({ pristine, submitting, handleSubmit }) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <Field name="userType" component={renderRadioGroup}>
      <RadioButton value="developer" label="Developer" />
      <RadioButton value="employer" label="Employer" />
    </Field>
    <Field
      name="username"
      component={TextField}
      floatingLabelText="Username"
      validate={required}
    />
    <Field
      name="email"
      component={TextField}
      floatingLabelText="Email"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      component={TextField}
      floatingLabelText="Password"
      type="password"
      validate={required}
    />
    <div className={classes.submit}>
      <RaisedButton
        label="Signup"
        primary
        type="submit"
        disabled={pristine || submitting}
      />
    </div>
  </form>
)
SignupForm.propTypes = {
  pristine: PropTypes.bool.isRequired, // added by redux-form
  submitting: PropTypes.bool.isRequired, // added by redux-form
  handleSubmit: PropTypes.func.isRequired // added by redux-form
}
export default reduxForm({
  form: SIGNUP_FORM_NAME
})(SignupForm)
