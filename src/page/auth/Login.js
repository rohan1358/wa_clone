import React, { Component } from "react";
import "./style.css";
import {
  useHistory,
  BrowserRouter,
  history,
  Link,
  withRouter,
  firebase,
} from "../../utils/func/Func";
import { createHashHistory } from "history";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newChat: false,
      username: "",
      password: "",
      email: "",
      phone: "",
    };
  }

  handleCHange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  Login = () => {
    localStorage.setItem("LogIn", true);
    setTimeout(() => {
      this.props.history.push("/");
    }, 200);
  };

  signInWithEmailPasswoerd = () => {
    var numberPhone = "123456789";

    // [START auth_signup_password]
    const { email, phone, username, password } = this.state;
    console.log(this.state);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        const ref = firebase.database().ref("users/");
        // ref.orderByChild('email').equalTo(email).once('value', snap => {
        //     console.log(snap)
        //     if (snap.exists()) {
        //         alert('success')
        //     } else {
        //         console.log('err')
        //     }

        // })

        ref
          .orderByChild("email")
          .equalTo(email)
          .on("value", (snap) => {
            this.snapshotToArray(snap);
            if (this.snapshotToArray(snap)) {
              this.props.history.push("/");
            }
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
        // ..
      });
    // [END auth_signup_password]
  };

  snapshotToArray = (snapshot) => {
    const returnArr = [];
    console.log(snapshot);

    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });
    localStorage.setItem("LogIn", JSON.stringify(returnArr[0]));

    return returnArr;
  };
  addData = (userId, name, email, imageUrl) => {
    firebase
      .database()
      .ref("users/" + "userId")
      .set({
        username: "name",
        email: "email",
        profile_picture: "imageUrl",
      });
  };

  signIn = () => {};
  render() {
    return (
      <div>
        <div className="mains">
          <form className="form1 text-center" autoComplete="off">
            <p className="sign" align="center">
              Sign in
            </p>

            <div className="text-center">
              <input
                onChange={(e) => this.handleCHange(e)}
                required={true}
                className="pass"
                type="email"
                align="center"
                placeholder="Email"
                name="email"
                autoComplete="off"
              />
            </div>
            <div className="text-center">
              <input
                onChange={(e) => this.handleCHange(e)}
                required={true}
                className="pass"
                type="password"
                align="center"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
            </div>

            <div className="text-center">
              <Link
                className="submit"
                onClick={() => this.signInWithEmailPasswoerd()}
                align="center"
              >
                Sign in
              </Link>
              <p className="forgot register" align="center">
                <Link to="/register">Register</Link>
              </p>

              <p className="forgot" align="center">
                <Link to="#">Forgot Password?</Link>
              </p>
            </div>
          </form>
        </div>
        <Link to="#"></Link>
      </div>
    );
  }
}

const ShowTheLocationWithRouter = withRouter(Login);
export default ShowTheLocationWithRouter;
