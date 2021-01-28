import React from "react";
import { firebase } from "../index";
const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;
export class DataUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [], chat: [], newChat: null, friendlist: [] };
  }

  AddUser = (data) => {
    console.log([...this.state.user, ...data]);
    if (data) {
      this.setState({ user: data });
    }
  };
  ReduceUser = (id) => {
    const { user } = this.state;
    const filter = user.filter((data) => data.id !== id);
    if (id) {
      this.setState({ user: filter });
    }
  };
  ShowChat = (data) => {
    console.log({ ...this.state, chat: data });
    this.setState({ ...this.state, chat: data });
  };
  AddNewChat = (data, chatRoom) => {
    console.log({ ...this.state, newChat: data });
    this.setState({ ...this.state, newChat: data });
    const chat_room = firebase.database().ref("chats/");
    chat_room
      .orderByChild("chat_room")
      .equalTo(data.numberPhone)
      .on("value", function (snapshot) {
        let arr = [];
        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          arr.push(item);
        });
        chatRoom(arr);
      });
  };
  render() {
    const { user, chat, newChat } = this.state;
    const { AddUser, ReduceUser, ShowChat, AddNewChat } = this;
    return (
      <DataContext.Provider
        value={{
          user,
          chat,
          newChat,
          AddUser,
          ReduceUser,
          ShowChat,
          AddNewChat,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContext;
