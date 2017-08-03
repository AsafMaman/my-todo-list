import React,{Component} from 'react'
import LoginForm from '../../components/loginForm'

class Login extends Component{
  submit =(values)=>{
      console.log(values);
  }
  render(){
    return(
      <div>
        <LoginForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default Login;