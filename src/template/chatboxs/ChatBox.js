import React from 'react'
import './style.css'
function ChatBox({ data, chat }) {
  console.log(chat, Array.isArray(chat))
  return (
    <React.Fragment>
      
      {
        chat.map((datas, index) => {
          if (datas.from === '085524531474') {
           return (
            <div className="containers">
            <img src={data.img} alt="Avatar" style={{ width: '100%' }} />
            <p style={{float:'left'}}>{datas.message}</p>
            <span className="time-right">11:00</span>
          </div>
           )
          } else {
            return (
              <div className="containers darkers">
              <img src={data.img} alt="Avatar" className="right" style={{ width: '100%' }} />
              <p style={{float:'right'}}>{datas.message}</p>
              <span className="time-left">11:01</span>
            </div>
            )
          }
        })
      }

    </React.Fragment>
  )
}

export default ChatBox
