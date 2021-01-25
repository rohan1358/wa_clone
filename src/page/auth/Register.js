import React, { Component } from 'react'
import './style.css'
import { useHistory, BrowserRouter, history, withRouter } from '../../utils/func/Func'
import firebase from '../../utils/firebase/firebase'
     class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newChat: false,
            username: '',
            password: '',
            email: '',
            phone: ''
        }

    }

    handleCHange = (e) => {
        const {value, name}= e.target
        console.log(value, name)
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    Login = () => {
        localStorage.setItem('LogIn', true)
        setTimeout(() => {
            this.props.history.push('/')
        }, 200);
    }

    signUpWithEmailPasswoerd = () => {

        var numberPhone = '123456789';

        // [START auth_signup_password]
        const { email, phone, username, password } = this.state
        console.log(this.state)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                const newUser = firebase.database().ref('users/').push();
                console.log(user)
                async function add() {
                    await newUser.set({
                        email: email,
                        numberPhone: phone,
                        username: username,
                        password: password
                    }).then(res => {
                        this.props.history.push('/login')
                    })
                };
                add()
                // Signed in 
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
        // [END auth_signup_password]
    }
    addData = (userId, name, email, imageUrl) => {
        firebase.database().ref('users/' + 'userId').set({
            username: 'name',
            email: 'email',
            profile_picture: 'imageUrl'
        });
    }
    render() {
        return (
            <div>
                <div className="mains">
                    <form className="form1 text-center" autoComplete="off" >
                    <button type="button" onClick={() => this.props.history.go(-1)} className="btn-back-login">back</button>
                    <br/>

                        <p className="sign" align="center">Sign in</p>

                        <div className="text-center">
                            <input onChange={(e) => this.handleCHange(e)} required={true} className="un" type="text" align="center" placeholder="Username" name="username" autoComplete="off" />

                        </div>
                        <div className="text-center">
                            <input onChange={(e) => this.handleCHange(e)} required={true} className="pass" type="number" name="phone" align="center" placeholder="Number Phone" autoComplete="off" />

                        </div>
                        <div className="text-center">
                            <input onChange={(e) => this.handleCHange(e)} required={true} className="pass" type="email" align="center" placeholder="Email" name="email" autoComplete="off" />

                        </div>
                        <div className="text-center">
                            <input onChange={(e) => this.handleCHange(e)} required={true} className="pass" type="password" align="center"name="password" placeholder="Password" autoComplete="off" />

                        </div>

                        <div className="text-center">
                            <a className="submit" onClick={() => this.signUpWithEmailPasswoerd()} align="center">Register</a>
                            <p className="forgot f-register" align="center"><a href="#">Forgot Password?</a></p><a href="#">
                            </a>
                        </div>
                    </form></div><a href="#">
                </a></div>

        )
    }
}

 const ShowTheLocationWithRouter = withRouter(Login);
 export default ShowTheLocationWithRouter