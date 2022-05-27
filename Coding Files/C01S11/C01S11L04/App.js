import React,{Component} from "react";  
import './appStyles.css';
import style from './appStyles.module.css';

class App extends Component {  
render(){   
return
 (  
<div className="App">   
<h1 className= "error"> Error</h1>
<h1 className={styles.success}>Success</h1>
</div>  
 );  
}  
export default App; 


