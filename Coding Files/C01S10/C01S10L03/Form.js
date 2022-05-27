import React ,{component} from ‘react’

class Form extends component{
constructor(props){
super(props)

this.state={
Username: "",
comments:"",
};
}
 HandleUsernameChange = (event)=> {
               this.setState({
            username: event.target.value,
)};
};

 HandleCommentsChange = (event)=> {
               this.setState({
            comments: event.target.value,
)};
};


render(){
return(
<form>
<div>
<label> Username </label>
<input 
type= "text"
 value={this.state.username} 
onChange={this.HandleUsernameChange}
/>
</div>
<div>
<label> Comments </label>
<textarea 
 value={this.state.comments} 
onChange={this.HandleCommentsChange}
/>
</div>
</form>
)
}
}
export default Form

