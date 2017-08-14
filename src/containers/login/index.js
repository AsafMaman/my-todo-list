import React,{Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from '../../components/loginForm'
import {actions} from '../../modules/authentication'

class Login extends Component{
  // componentDidMount(){
  //   // Injected by react-redux:
  //   let { dispatch } = this.props
  // }

  submit =(values)=>{
     let { dispatch } = this.props
      dispatch(actions.login(values.user,values.password))
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
})


export default connect(
  mapStateToProps,
  null
)(Login)