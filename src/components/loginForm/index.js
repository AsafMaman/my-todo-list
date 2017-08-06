import React from 'react'
import {Field,reduxForm} from "redux-form"

import "./loginForm.css"

const validate = values => {
  const errors = {}
  if (!values.user) {
    errors.user = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

let LoginForm=props => {
    const {handleSubmit,invalid} =props
    return(
      <div className="row">
        <div className="col-md-12">invalid:{invalid?'true':'false'}</div>
        <div className="col-lg-4 col-lg-offset-4 col-md-8 col-xs-12">
          <form onSubmit={ handleSubmit } className="form-horizontal">
            <div className="form-group">
              <label htmlFor="user" className="col-sm-3 control-label">User</label>
              <div className="col-sm-9">
                <Field name="user" className="form-control" component="input" type="text" placeholder="User"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="col-sm-3 control-label">Password</label>
              <div className="col-sm-9">
                <Field name="password" className="form-control" component="input" type="password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-2 col-lg-offset-6">
                <button type="submit" className="btn btn-success" disabled={invalid}>Submit</button>
              </div>
            </div>
          </form>
        </div>
    </div>
    )
}

LoginForm=reduxForm({
    form:'login',
    validate
})(LoginForm)

export default LoginForm;