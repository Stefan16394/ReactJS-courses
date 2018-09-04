import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom'
import Header from './components/Header'
import Form from './components/Form/Form'

const About = ({ match }) => (
  <div>
    <h1>About</h1>
    {/* <Link to={match.url+'/contact'}/> */}
    <Route path={match.url + '/contact'} component={Contact} />
  </div>
)

const Home = props => (
  <div>
    <h1>Home</h1>
  </div>
)

const Contact = props => (
  <div>
    <h1>Stefan Rangelov</h1>
  </div>
)

const User=({match})=>(
    <div>
      <h1>{match.params.username}</h1>
      </div>
)

const NotFound=props=>(
  <div>
    <h1>Error 404</h1>
    </div>
)

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      loggedIn:false
    }
  }
   
  withProps=(FormComponent,data)=>{
       class FormRole extends Component{
            render(){
              return (
                <div>
                  <FormComponent role={data}/>
                </div>
              )
            }
       }
       return FormRole
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={()=>{
            let CorrectForm=''
              if(this.state.loggedIn){
                  CorrectForm= this.withProps(Form,'admin')
              }
              else{
                 CorrectForm= this.withProps(Form,'user')        
              }
              return <CorrectForm/>
             
          }} />
          <Route path='/about' component={About} />
          <Route path='/user/:username' component={User} />
          <Route component={NotFound}/>
        </Switch >
      </div>
        );
      }
    }
    
    export default App;
