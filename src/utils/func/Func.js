import { useHistory, useLocation, BrowserRouter, Link, BrowserRouterProps } from 'react-router-dom'
import { createBrowserHistory, createHashHistory } from 'history'
import { withRouter } from 'react-router'
import firebase from '../firebase/firebase'
import DataContext, { DataUser, DataConsumer} from '../conext/Context'
const history = createHashHistory()
export { useLocation, useHistory, BrowserRouter, Link, createBrowserHistory, history, withRouter, firebase, DataContext, DataUser, DataConsumer }