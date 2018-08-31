import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/google_map';
import Campsites from './campsiteContainer/campsiteContainer';
import Reviews from './reviewsContainer/reviewsContainer';
import NavbarComponent from './navBar/navBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }
    handleChange = (e) => {
      console.log(e.currentTarget.value);
      this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  
    }
  
    handleSubmit = async (e) => {
      console.log(this.props.csrf_token)
      e.preventDefault();
      const data = { ...this.state, csrfmiddlewaretoken: this.props.csrf_token };
      console.log(data, 'this is data from ')
      const loginResponse = await fetch('http://localhost:8000/get_auth_token/', {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(
          data),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': this.props.csrf_token,
        }
      });
  
      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse);
      this.setState({ auth_token: parsedResponse.token })
  
      if (parsedResponse.data === 'login successful') {
        this.props.history.push('/');
      }
  
    }


  
  render() {
    return (
      <div className="App">
        <NavbarComponent username={this.state.username} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <SimpleMap />
        <Campsites />
        <Reviews />
      </div>
    );
  }
}

export default App;
