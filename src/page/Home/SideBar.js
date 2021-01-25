import React from 'react'

function SideBar({ iconSide, FormSearch, ListUser, FontAwesomeIcon, faUser, hidden, toggleSide, openSideNewChat, menuToggle, signOut }) {
    return (
        <React.Fragment>
            <div hidden={hidden} className="w3-sidebar w3-bar-block w3-card" id="main3" style={{ width: '30%' }}>
                <nav id="menu4" className="navbar navbar-light bg-light nav-list-chat fixed-top" >
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <br />
                        <div className="float-end" >
                            {iconSide.map((data, index) => {
                                return (
                                    <button onClick={() => { toggleSide({ newChat: true }); openSideNewChat() }} className="sidebarsnya">
                                        <img key={index} className="icon-navbar" src={data.icon} width="24px" />
                                    </button>
                                )
                            })}
                            <div class="dropdowns">
                                <button onClick={() => menuToggle()} className=" sidebarsnya">
                                    <img className="icon-navbar dropbtn" src={iconSide[2].icon} width="24px" />
                                </button>
                                <div id="myDropdowns" class="dropdown-contents">
                                    <a href="#home">Home</a>
                                    <a href="#about">About</a>
                                    <a href="#contact" onClick={() => signOut()}>Logout</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
                <FormSearch autoFocus={false} />
                <div className="list-group">

                    <ListUser />

                </div>

            </div>
        </React.Fragment>
    )
}

export default SideBar
