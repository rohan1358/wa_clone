import React from 'react'
import './style.css'
import '../../Style.css'
import { Input } from '../index'
function sidebar({ close, InpSearch, FontAwesomeIcon,  faUser }) {
    return (
        <React.Fragment>
            <div id="mySidebar" className="sidebars">
                <nav style={{
                    position: '-webkit-sticky',
                    position: 'sticky', top: 0, zIndex: 1
                }} className="navbar navbar-light bg-light nav-list-chat sidebar-right">
                    <div className="container">
                        <a onClick={() => close()} className="navbar-brand" href="#">
                            <FontAwesomeIcon icon={faUser} />
                            <label className="icon-navbar" style={{ marginLeft: '10px' }}>User</label>
                        </a>
                        <br />
                        {/* <div className="float-end" >
                            {iconSide.map((data, index) => {
                                return (
                                    <img key={index} className="icon-navbar" src={data.icon} width="24px" />
                                )
                            })}</div> */}

                    </div>
                </nav>
                {/* <a href="javascript:void(0)" onClick={() => close()} className="closebtn">×</a> */}
                <InpSearch autoFocus={true} />

            </div>


        </React.Fragment>
    )
}

export default sidebar
