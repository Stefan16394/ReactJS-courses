import React, { Component } from 'react';
import './App.css';
import './styles/site.css'
import './styles/submit.css'
import { Route } from 'react-router-dom'
import Header from './components/common/Header'
import Home from './components/home/Home';
import Notification from './components/common/Notification'
import Catalog from './components/catalog/Catalog'
import Footer from './components/common/Footer';
import Logout from './components/user/Logout';
import Create from './components/post/Create';
import Observer from './infrastructure/Observer';
import EditForm from './components/post/Edit';
import Delete from './components/post/Delete';
import MyPosts from './components/post/MyPosts';
import Details from './components/post/Details';
import DeleteComment from './components/comment/Delete';

class App extends Component {
  constructor(props) {
    super(props)
    const isLoggedIn = sessionStorage.getItem('authtoken') ? true : false
    this.state = {
      isLoggedIn
    }
    Observer.subscribe(Observer.events.loginUser, this.logInUser)
    Observer.subscribe(Observer.events.logoutUser, this.logOutUser)
  }

  logInUser = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  logOutUser = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Notification />
        <div className='content'>
          <Route exact path='/' render={() => <Home isLoggedIn={this.state.isLoggedIn} />} />
          <Route path='/logout' component={Logout} />
          <Route path='/catalog' component={Catalog} />
          <Route path='/create' component={Create} />
          <Route path='/edit/:id' component={EditForm} />
          <Route path='/delete/:id' component={Delete} />
          <Route path='/details/:id' component={Details} />
          <Route path='/myposts' component={MyPosts} />
          <Route path='/comment/delete/:id' component={DeleteComment} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
