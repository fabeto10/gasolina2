// import React, { Component } from "react"
// import { Link } from "react-router-dom"

// class GoogleAuthButton extends Component {
//   state = { isSignedIn: null }

//   componentDidMount() {
//     window.gapi.load("auth2", () => {
//       window.gapi.auth2.init({
//           client_id: process.env.REACT_APP_GAUTH2_CLIENT_ID,
//           scope: "email",
//           plugin_name: 'log Gaso'
//         })
//         .then(() => {
//           this.auth = window.gapi.auth2.getAuthInstance();
//           // updating  state so component will re-render
//           this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//         })
//     })
//   }


// retrieveUserStatus() {
//     if (this.state.isSignedIn === null) {
//       return "UNKNOWN"
//     } else if (this.state.isSignedIn) {
//       return "SIGNED IN"
//     } else {
//       return "NOT SIGNED IN"
//     }
//   }
//   render() {
//     return (
//       <Link to="/" className="item">
//         <div>Status: {this.retrieveUserStatus()}</div>
//       </Link>
//     )
//   }
// }

// export default GoogleAuthButton