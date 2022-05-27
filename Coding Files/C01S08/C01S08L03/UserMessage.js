
import React, { Component } from "react"
class UserMessage extends Component{
constructor(props) {
  super(props)

  this.state = {
    isLoggedIn:true
  }
}


render()
{
let message;
if (this.state.isLoggedIn)
{
message = <div>Welcome Dhoni</div>
}
else
{
message = <div>Welcome Sachin</div>
}
return <div>{message}</div>
}
}
export default UserMessage


