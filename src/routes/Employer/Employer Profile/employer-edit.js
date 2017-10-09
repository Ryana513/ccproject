import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

const EmployerEdit = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="companyName" component={TextField} label="Company Name" />
      </div>
      <div>
        <Field name="companyRole" component={TextField} label="Company Role" />
      </div>
      <div>
        <Field
          name="about"
          component={TextField}
          label="About"
          multiLine
          rows={3}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

EmployerEdit.propTypes = {
  pristine: PropTypes.bool.isRequired, // added by redux-form
  submitting: PropTypes.bool.isRequired, // added by redux-form
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'EmployerEdit' // a unique identifier for this form
})(EmployerEdit)
