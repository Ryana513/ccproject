import React, { Component } from "react";
import {UserForm} from "./Components/user-registration";
import submitUser from "./services/user-reg-fireDB";

//The coded out code lines 7-51 was coded by drew for testing. -SDG

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { messages: [] }; // <- set up react state
//   }
//   componentWillMount() {
//     /* Create reference to messages in Firebase Database */
//     let messagesRef = fire
//       .database()
//       .ref("messages")
//       .orderByKey()
//       .limitToLast(100);
//     messagesRef.on("child_added", snapshot => {
//       /* Update React state when message is added at Firebase Database */
//       let message = { text: snapshot.val(), id: snapshot.key };
//       this.setState({ messages: [message].concat(this.state.messages) });
//     });
//   }
//   addMessage(e) {
//     e.preventDefault(); // <- prevent form submit from reloading the page
//     /* Send the message to Firebase */
//     fire
//       .database()
//       .ref("messages")
//       .push(this.inputEl.value);
//     this.inputEl.value = ""; // <- clear the input
//   }
//   render() {
//     return (
//       <form onSubmit={this.addMessage.bind(this)}>
//         <input type="text" ref={el => (this.inputEl = el)} />
//         <input type="submit" />
//         <ul>
//           {/* Render the list of messages */
//           this.state.messages.map(message => (
//             <li key={message.id}>{message.text}</li>
//           ))}
//         </ul>
//       </form>
//     );
//   }
// }

// export default App;



export default class App extends Component {
 
  submit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <UserForm onSubmit={submitUser} />
    );
  }
}