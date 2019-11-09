import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { loginUser } from '../actions';
import Navbar from '../utils/Navbar';
import Carousel from '../utils/Carousel'
// import Form from 'react-bootstrap/Form'

// import Button from 'react-bootstrap/Button'



// import axios from 'axios';
// import axios from 'axios'
import "../utils/styles/login.css"
import Signup from "../utils/Modal"
class LogIn extends Component {

    onLogIn = (e) => {
        e.preventDefault();

        // normally you would pass in the login credentials to the login action
        this.props.loginUser();
    }

    render() {
        return (


            <div className="container">

                <Navbar />


                <Carousel />
                <Signup />
            </div>





        );
    }
}

export default LogIn