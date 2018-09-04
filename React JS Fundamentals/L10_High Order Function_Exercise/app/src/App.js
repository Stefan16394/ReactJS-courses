import React, { Component } from 'react';
import './App.css';
import BoundForm from './components/BoundForm';
import Form from './components/Problem1/Form';
import NavBar from './components/Problem1/NavBar';
import Article from './components/Problem1/Article';
import Observer from './components/Observer';
import withWarning from './components/Problem1/withWarning';
import ErrorBoundary from './components/Problem2/ErrorBoundary';

const ArticleWarning = withWarning(Article)
const NavBarWarning = withWarning(NavBar)
const FormWarning = withWarning(Form)

function onSubmit(data, e) {
  console.log(data)
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
    Observer.subscribe('error', this.changeStateTrue)
    Observer.subscribe('success', this.changeStateFalse)
  }

  changeStateTrue = () => {
    this.setState({
      hasError: true
    })
  }

  changeStateFalse = () => {
    this.setState({
      hasError: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Problem 1:Submit empty field on form to trigger Warning high order component</h1>
        <ErrorBoundary>
          {!this.state.hasError ? <NavBar /> : <NavBarWarning />}
          {!this.state.hasError ? <Article /> : <ArticleWarning />}
          {!this.state.hasError ? <Form /> : <FormWarning />}
          <h1>Problem 3 logs state on console</h1>
          <BoundForm onSubmit={onSubmit}>
            <input name='username' placeholder='username' />
            <input name='password' placeholder='password' type='password' />
            <input type='submit' value='submit' />
          </BoundForm>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
