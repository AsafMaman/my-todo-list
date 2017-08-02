import React from 'react';
import {connect} from 'react-redux'
import { Route, Link } from 'react-router-dom'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import Login from '../login'
import Home from '../home'
import About from '../about'

const App = props => (
  <div>
    <Navbar inverse collapseOnSelect fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a>React</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}><Link to="/home">Home</Link></NavItem>
          <NavItem eventKey={2}><Link to="/about-us">About</Link></NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      {/* <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav> */}
      </Navbar.Collapse>
    </Navbar>
     <div>isLogin:{props.authentication.isLoggedIn?'True':'False'}</div> 
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

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
)(App)

// export default App