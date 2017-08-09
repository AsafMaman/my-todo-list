import React,{Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from '../../components/loginForm'
import {authenticateUser} from '../../modules/authentication'

class Login extends Component{
  // componentDidMount(){
  //   // Injected by react-redux:
  //   let { dispatch } = this.props
  // }
  submit =(values)=>{
     let { dispatch } = this.props
      console.log(values)
      dispatch({type: 'AUTHENTICATE_USER',payload:{user:'user',password:'password'}})
      var temp=authenticateUser(values.user,values.password)
      temp(dispatch)
  }
  render(){
    return(
      <div>
        <LoginForm onSubmit={this.submit}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authentication:state.authentication,
  router:state.router
  // count: state.counter.count,
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
})


export default connect(
  mapStateToProps,
  null
)(Login)

//export default Login;