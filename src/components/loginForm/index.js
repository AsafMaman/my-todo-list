import React from 'react'
import {Field,reduxForm} from "redux-form"
// import {FormGroup,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap'

let LoginForm=props => {
    const {handleSubmit} =props
    return(
        // <form onSubmit={handleSubmit}>
      //   <form>
      //   <FormGroup controlId="formBasicText">
      //     <ControlLabel>User Id</ControlLabel>
      //     <Field name="userId" component="input" type="text" />
      //     {/* <FormControl
      //       type="text"
      //       placeholder="Enter text"
      //       onChange={this.handleChange}
      //     /> */}
      //     {/* <FormControl.Feedback />
      //     <HelpBlock>Validation is based on string length.</HelpBlock> */}
      //   </FormGroup>
      // </form>
      <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" placeholder="User"/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
    )
}

LoginForm=reduxForm({
    form:'login'
})(LoginForm)

export default LoginForm;