import React ,{component} from ‘react’

class Form extends component{
constructor(props){
super(props)

this.state={
Username: "",
comments:"",
topic: "react",
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

 handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
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
 <div>
          <label>Topic </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react"> React</option>
            <option value="angular"> Angular</option>
            <option value="vue"> Vue</option>
          </select>
        </div>
</form>
)
}
}
export default Form

