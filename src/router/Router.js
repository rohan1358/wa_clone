import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";
import { Login, Home, Register } from '../page/index'
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    const history = useHistory()
    function PrivateRoute({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    localStorage.getItem('LogIn') ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        );
    }
    function PrivateRouteWithoutLogin({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    localStorage.getItem('LogIn') !== 'true' ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        );
    }


    return (
        <Router >
            <Switch>
                <PrivateRoute exact path="/">
                    <Home history={history} />
                </PrivateRoute>
                <PrivateRouteWithoutLogin exact path="/login" >
                    <Login history={history} />
                </PrivateRouteWithoutLogin>
                <PrivateRouteWithoutLogin exact path="/register" >
                    <Register />
                </PrivateRouteWithoutLogin>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.



function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
