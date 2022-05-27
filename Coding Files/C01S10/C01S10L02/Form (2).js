import React ,{component} from ‘react’

class Form extends component{
constructor(props){
super(props)

this.state={
Username: "",
}
}
 HandleUsernameChange = (event)=> {
               this.setState({
            username: event.target.value,
)}
}

render(){
return(
<form>
<div>
<label> Username </label>
<input type= "text"
 value={this.state.username} 
onChange={this.HandleUsernameChange}
/>
</div>
</form>
)
}
}
export default Form


