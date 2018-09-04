import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/NavBar';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Notification from './infrastructure/Notification';
import Logout from './components/user/Logout';
import { Route,Switch } from 'react-router-dom'
import EventForm from './components/admin/createEvent';
import EventList from './components/events/EventList';
import Details from './components/events/Details';
import RefundPost from './components/authenticated/Refund'
import PurchaseList from './components/authenticated/PurchaseList';
import EditEvent from './components/admin/EditEvent';
import Delete from './components/admin/DeleteEvent';
import GenreList from './components/search/GenreList';
import SubscriptionList from './components/authenticated/Subscriptions';

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: sessionStorage.getItem('authtoken')
    }
  }

  logIn = (user) => {
    this.setState({
      user
    })
    let role='46d931a3-750c-4290-b66b-e662311685c8'
    if(user._kmd.roles){
       role=user._kmd.roles[0].roleId
    }
    sessionStorage.setItem('roleid',role)
    sessionStorage.setItem('authtoken', user._kmd.authtoken)
    sessionStorage.setItem('userid', user._id)
  }

  logOut = () => {
    this.setState({
      user: ''
    })
    sessionStorage.clear()
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar user={this.state.user} />
          <Notification />
         <Switch>
          {/*  No-restriction routes */}
          <Route exact path='/' component={EventList} />
          <Route path='/user/register' render={(props) => <Register logIn={this.logIn} {...props}/>} />
          <Route path='/user/login' render={(props) => <Login logIn={this.logIn} {...props}  />} />
          <Route path='/user/logout' render={(props) => <Logout logOut={this.logOut} {...props} />} />
          <Route path='/details/:id' component={Details} />
      
          {/* Admin and User routes */}
          <Route exact path='/user/subscribtions' component={SubscriptionList}/>    
          <Route path='/user/purchases' component={PurchaseList} />
          <Route path='/user/refund/:id' component={RefundPost} />
          <Route path='/genres' component={GenreList} />

          {/* Adming only routes */}
          <Route path='/admin/create' component={EventForm} />
          <Route path='/admin/edit/:id' component={EditEvent} />
          <Route path='/admin/delete/:id' component={Delete} />

           {/* Page not found */}
          <Route render={() => <h1>Page not found</h1>} />

      </Switch>
        </div>
      </div>
    );
  }
}

export default App;
