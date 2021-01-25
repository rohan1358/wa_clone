import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { firebase } from '../../utils/index'
import { i_status, smile, file, send, search } from '../../assets/image/index'
import '../../Style.css'
import Input from '../../template/input/Input'
import { ChatBox, SidebarDetail } from '../../template/index'
import Navbar from './Navbar'
import Content from './Content'
import Sidebar from './SideBar'
import UserDetail from './UserDetail'
import NewChat from './NewChat'
import { DataConsumer, withRouter, DataContext, DataUser, } from '../../utils/index'

export { Navbar, Content, Sidebar, UserDetail, NewChat }
class Homes extends Component {
    render() {
        return (<DataContext.Provider>


            <DataUser>
                <DataConsumer>

                    {props => {
                        const { user, AddUser, ReduceUser } = props
                        console.log(user, AddUser)
                        return (
                            <div>
                                <ul style={{ backgroundColor: 'white', color: 'black' }}>
                                    {Array.isArray(user) &&

                                        user.map((data, index) => {
                                            return (
                                                <div>
                                                    <li key={index}>
                                                        {data.username}
                                                    </li>
                                                    <button onClick={() => ReduceUser(data.id)}>reduce users</button>
                                                </div>
                                            )
                                        })}
                                </ul>
                                <button onClick={() => AddUser({ username: 'adi', email: 'rohan@gmail.com', phone: '0198423198328', password: '23443', id: Math.random() })}>addUsers</button>
                            </div>
                        )
                    }}
                </DataConsumer>

            </DataUser>
        </DataContext.Provider>)
    }
}
class Home extends Component {
    static contextType = DataContext
    constructor(props) {
        super(props)
        this.state = {
            newChat: false,
            db: firebase.database().ref('users/'),
            chat_room: firebase.database().ref('chats/'),
        }
    }

    componentDidMount() {
        const { AddUser, ShowChat } = this.context
        const { chat_room, } = this.state
        const db = firebase.database().ref('users/').orderByChild('username')
        const db2 = firebase.database().ref('chats/')
        db.on('value', snapshot => {
            const arr = [];
            snapshot.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                arr.push(item);
            });
            AddUser(arr)
        })
        console.log(db)
        // db.equalTo('691rohan@gmail.com').on('child_added', function(data){
        //     console.log("Start at filter: " + data.val().username);
        // })


        chat_room.orderByChild('chat_room').equalTo('08112233445').on('value', function (snapshot) {
        let arr = [];
            snapshot.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                arr.push(item);
            });
            ShowChat(arr)
        })



    }

    AddChat = (data) => {
        const { db } = this.state


        db.orderByChild('email').on('value', snapshot => {
            snapshot.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;

                if (item.numberPhone === data.numberPhone) {

                }
                // arr.push(item);
            });
        })
    }
    replaceIcon = (params) => {

    }
    listUser = () => {
        return (
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <img src={smile} width="50px" height="50px" alt="..." />

                    <div>
                        <h5 className="mb-1">List group item heading</h5>
                        <p className="mb-1 last-message">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </div>
                    <small className="text-muted">3 days ago</small>
                </div>
            </a>
        )
    }
    openNav = () => {
        console.log('test')
        const doc = document.getElementById("mySidebar")
        const doc2 = document.getElementById("main")
        const doc3 = document.getElementById("main2")
        const doc4 = document.getElementById("main3")
        const doc5 = document.getElementById("menu4")
        const doc6 = document.getElementById("menu5")


        if (doc) {
            if (window.innerWidth < 1025) {
                doc.style.width = " 250px"
                doc.style.width = " 70%"
            } else {
                doc.style.width = " 250px"
                doc2.style.marginRight = "250px";
                doc3.style.marginRight = "250px";
                doc4.style.width = "25%";
                doc5.style.width = "25%";
                doc3.style.marginLeft = "25%";

            }

        }
    }

    closeNav = () => {
        console.log('test')
        const doc = document.getElementById("mySidebar")
        const doc2 = document.getElementById("main")
        const doc3 = document.getElementById("main2")
        const doc4 = document.getElementById("main3")
        const doc5 = document.getElementById("menu4")
        const doc6 = document.getElementById("menu5")



        if (doc) {
            doc.style.width = "0px"
            doc2.style.marginRight = "0px";
            doc3.style.marginRight = "0px";
            doc4.style.width = "30%";
            doc5.style.width = "30%";
            doc3.style.marginLeft = "30%";

        }
        // document.getElementById("mySidebar").style.width = "250px";
        // document.getElementById("main").style.marginRight = "250px";
    }
    formSearch = ({ autoFocus }) => {
        return (
            <form autoComplete="off"
                style={{
                    position: '-webkit-sticky',
                    position: 'sticky', top: 0, zIndex: 100
                }}
            >

                <nav className="search-list-user p-2 navbar justify-content-end">
                    <div className="col-md-11 justify-content-center rounded-pill justify-content-end bg">


                        <div className="input-group rounded-pill jus" >
                            <Input icon={search} autoComplete="off" autoFocus={autoFocus && autoFocus} />
                        </div>
                    </div>
                </nav>
            </form>
        )
    }
    openSideNewChat = () => {
        const doc = document.getElementById("main6")
        const doc2 = document.getElementById("main7")
        doc.style.width = '30%'
        doc2.style.width = '30%'
        doc.style.minWidth = '200px'
        doc2.style.minWidth = '200px'
        doc.style.display = 'block'
    }
    closeSideNewChat = () => {
        const doc = document.getElementById("main6")
        const doc2 = document.getElementById("main7")
        doc.style.width = '0px'
        doc2.style.width = '0px'
        doc.style.minWidth = '0px'
        doc2.style.minWidth = '0px'
        doc.style.display = 'block'
    }
    menuToggle = () => {
        document.getElementById("myDropdowns").classList.toggle("show");
    }

    signOut = () => {
        localStorage.clear()
        setTimeout(() => {
            this.props.history.push('/login')
        }, 500);
    }


    render() {

        const { user, chat, AddNewChat } = this.context
        const iconSide = [{ icon: i_status },
        { icon: "https://th.bing.com/th/id/R3c5f7b445c957337255f19e345495b57?rik=9BM%2fdl%2fQ0FfAuA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_308868.png&ehk=GDJbeTSyuMK5JgzpkRBapK%2fPRGnHIFGMPwJ7adIDI%2fc%3d&risl=&pid=ImgRaw" },
        { icon: "https://cdn0.iconfinder.com/data/icons/basic-ui-elementsblack/3/37-512.png" }
        ]
        const iconCOntent = [{ icon: faSearch, name: 'icon' }, { icon: "https://cdn0.iconfinder.com/data/icons/basic-ui-elementsblack/3/37-512.png", name: 'image' }]

        return (
            <div style={{ minWidth: '1000px' }}>


                <SidebarDetail close={() => this.closeNav()} InpSearch={() => this.formSearch({ autoFocus: true })} FontAwesomeIcon={FontAwesomeIcon} faUser={faUser} />
                <div id="main" className='child' >

                    <NewChat AddChat={(data) => AddNewChat(data)} user={user} FormSearch={() => this.formSearch({ autoFocus: false })} collapse={() => this.closeSideNewChat()} toggleSide={(e) => this.setState(e)} />
                    <Sidebar menuToggle={() => this.menuToggle()} openSideNewChat={() => this.openSideNewChat()} toggleSide={(e) => this.setState(e)} hidden={this.state.newChat} FormSearch={() => this.formSearch({ autoFocus: false })} iconSide={iconSide} ListUser={() => this.listUser()} FontAwesomeIcon={FontAwesomeIcon} faUser={faUser} signOut={() => this.signOut()} />
                    <div className="content-wa" style={{ height: '100%' }}>
                        <nav className="navbar navbar-light bg-light fixed-top nav-content" id="main2">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <FontAwesomeIcon icon={faUser} />
                                    <label className="icon-navbar" style={{ marginLeft: '10px' }}>User</label>
                                </a>
                                <br />
                                <div className="float-end" >
                                    {iconCOntent.map((data, index) => {
                                        if (data.name === 'icon') {
                                            return (
                                                <button onClick={() => this.openNav()} className="sidebarsnya">


                                                    <FontAwesomeIcon icon={data.icon} />
                                                </button>
                                            )
                                        } else {
                                            return (

                                                <img key={index} className="icon-navbar" src={data.icon} width="24px" />
                                            )
                                        }
                                    })}

                                </div>



                            </div>

                        </nav>
                        <div className="w3-container chatArea " data-spy="scroll" >
                            <ChatBox chat={chat} data={{ img: smile }} />
                        </div>
                        {/* input chat */}
                        <div className="inp-area fixed-bottom">
                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid row">
                                    <div className="col-md-2">
                                        <div class="d-flex flex-row bd-highlight justify-content-center">
                                            <div class="p-2 bd-highlight">                  <img className="icon-navbar" width="24px" src={smile} />
                                            </div>
                                            <div class="p-2 bd-highlight"> <img className="icon-navbar" width="24px" src={file} /></div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 justify-content-center">

                                        <form>

                                            <div className="input-group" >
                                                <input type="text" className="form-control rounded-pill" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                <button type="submit" className="bg-none">
                                                    <img className="icon-navbar" width="24px" src={send} />

                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>




                            </nav>

                        </div>

                    </div>

                </div>
            </div >
        )
    }
}
Home.contextType = DataContext
const ShowTheLocationWithRouter = withRouter(Home);
export default ShowTheLocationWithRouter